import { useState } from "react";

import { Button } from "../core";
import { supabase } from "@/utils/supabaseClient";

type Props = {
  courseId: string;
  newLessonOrder: number;
};

export const AddLessonButton = ({
  courseId,
  newLessonOrder,
  ...props
}: Props) => {
  const [loading, setLoading] = useState(false);
  const handleCreateNewLesson = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      // create lesson and first lesson
      const { data: lesson, error } = await supabase.from("lessons").insert([
        {
          course_id: courseId,
          lesson_order: newLessonOrder,
          title: "New Lesson",
        },
      ]);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      {...props}
      color="accent"
      className="mt-8 text-sm dark:ring-offset-gray-800"
      onClick={handleCreateNewLesson}
      loading={loading}
    >
      Add Lesson
    </Button>
  );
};

export default AddLessonButton;
