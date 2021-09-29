import { useState, useEffect } from "react";
import type { NextPage } from "next";

import Sidebar from "@/components/Sidebar";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import CourseSidebar from "@/components/CourseSidebar";

const CoursePage: NextPage = () => {
  const router = useRouter();
  const { course: courseId } = router.query;
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("lessons")
          .select(
            `id, title, published, lesson_order, lesson_contents (
            id, type, properties, content_order
          )`
          )
          .eq("course_id", courseId);

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          console.log(data);
          setLessons(data);
        }
      } catch (error) {
        alert(error.message);
      } finally {
      }
    };

    if (courseId) {
      fetchCourses();
    }
  }, [courseId]);

  return (
    <main className="flex h-screen dark:bg-gray-950">
      <CourseSidebar />
      <div className="w-full px-8 py-6 pt-10 mx-6 border border-gray-700 mt-14 dark:bg-gray-900 rounded-t-3xl">
        Course: {courseId}
      </div>
    </main>
  );
};

export default CoursePage;
