import { useState } from "react";

import { Button } from "../core";
import { supabase } from "@/utils/supabaseClient";

export const AddCourseButton = (props) => {
  const [loading, setLoading] = useState(false);
  const handleCreateNewCourse = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      // create course and first lesson
      const { data: course, error } = await supabase
        .from("courses")
        .insert([{ author_user_id: user.id }]);

      if (error) {
        throw error;
      }

      if (course) {
        const { data: lesson, error } = await supabase
          .from("lessons")
          .insert([{ course_id: course[0].id, lesson_order: 0 }]);

        if (error) {
          throw error;
        }
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
      onClick={handleCreateNewCourse}
      loading={loading}
    >
      Add Course
    </Button>
  );
};

export default AddCourseButton;
