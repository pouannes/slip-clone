import { useState, useEffect } from "react";
import type { NextPage } from "next";

import { CourseList, AddCourseButton } from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { Course } from "@/types/Course";
import { supabase } from "@/utils/supabaseClient";

const Dashboard: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<null | Course[]>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("courses")
        .select(`id, title, published_status, language`)
        .eq("author_user_id", user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCourses(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
    const mySubscription = supabase
      .from("courses")
      .on("INSERT", (payload) =>
        setCourses((prevCourses) => [...prevCourses, payload.new])
      )
      .subscribe();

    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, []);

  return (
    <main className="flex h-screen dark:bg-gray-950">
      <Sidebar />
      <div className="w-full px-8 py-6 pt-10 mx-6 mt-20 border border-gray-700 dark:bg-gray-900 rounded-t-3xl">
        <header className="mb-10">
          <h1 className="text-3xl">Your courses</h1>
        </header>
        {courses !== null ? <CourseList courses={courses} /> : null}
        <AddCourseButton />
      </div>
    </main>
  );
};

export default Dashboard;
