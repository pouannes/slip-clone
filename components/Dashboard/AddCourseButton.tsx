import { useState } from "react";

import { Button } from "../core";
import { supabase } from "@/utils/supabaseClient";

export const AddCourseButton = (props) => {
  const [loading, setLoading] = useState(false);
  const handleCreateNewCourse = async () => {
    try {
      const user = supabase.auth.user();

      setLoading(true);
      const { data, error } = await supabase
        .from("courses")
        .insert([{ author_user_id: user.id }]);

      console.log(data);
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
      onClick={handleCreateNewCourse}
      loading={loading}
    >
      Add Course
    </Button>
  );
};

export default AddCourseButton;
