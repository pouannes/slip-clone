import Link from "next/link";
import SlipIcon from "@/public/slip-icon.svg";
import SidebarLesson from "./SidebarLesson";
import { Lesson } from "@/types/Lesson";
import AddLessonButton from "./AddLessonButton";

type Props = {
  lessons: Lesson[];
  currentLessonId?: string;
  setCurrentLessonId: (lessonId: string) => void;
  courseId: string;
};

const CourseSidebar = ({
  lessons,
  currentLessonId,
  setCurrentLessonId,
  courseId,
}: Props): JSX.Element => {
  const iconClass = "w-6 h-6 mr-3";
  return (
    <nav className="flex flex-col h-full px-2 w-full max-w-[256px] dark:bg-gray-950 rounded-r-3xl">
      <Link href="/dashboard">
        <a>
          <SlipIcon className="h-10 my-2" />
        </a>
      </Link>
      <div className="flex flex-col gap-4 pt-10">
        {lessons?.map((lesson, index) => (
          <SidebarLesson
            key={lesson.id}
            selected={currentLessonId === lesson.id}
            handleClick={() => setCurrentLessonId(lesson.id)}
            label={lesson.title}
            index={index}
          />
        ))}
        <AddLessonButton
          courseId={courseId}
          newLessonOrder={lessons?.length + 1}
        />
      </div>
    </nav>
  );
};

export default CourseSidebar;
