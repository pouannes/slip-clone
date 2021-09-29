import { HomeIcon, AcademicCapIcon, UserIcon } from "@heroicons/react/outline";
import SlipIcon from "@/public/slip-icon.svg";
import SidebarLink from "./SidebarLink";

const CourseSidebar = (): JSX.Element => {
  const iconClass = "w-6 h-6 mr-3";
  return (
    <nav className="flex flex-col h-full px-2 w-full max-w-[256px] dark:bg-gray-950 rounded-r-3xl">
      <SlipIcon className="h-10 my-2" />
      <div className="flex flex-col gap-4 pt-10">
        <SidebarLink
          href="/dashboard"
          icon={<HomeIcon className={iconClass} />}
          label="Course Dashboard"
        />
        <SidebarLink
          href="/student"
          icon={<AcademicCapIcon className={iconClass} />}
          label="Purchased Courses"
        />
      </div>
    </nav>
  );
};

export default CourseSidebar;
