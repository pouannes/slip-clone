import { useState, useEffect, useMemo, useCallback } from "react";
import type { NextPage } from "next";

import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import CourseSidebar from "@/components/CourseSidebar";
import { Lesson } from "@/types/Lesson";

const CoursePage: NextPage = () => {
  const router = useRouter();
  const { course: courseId } = router.query as { course: string };
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);

  const fetchLessons = useCallback(async () => {
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
        setLessons(data);
        setCurrentLessonId(data[0].id);
      }
    } catch (error) {
      alert(error.message);
    } finally {
    }
  }, [courseId]);

  useEffect(() => {
    if (courseId) {
      fetchLessons();
    }

    const mySubscription = supabase
      .from("lessons")
      .on("INSERT", (payload) => {
        setLessons((prevLessons) => [...prevLessons, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, [courseId, fetchLessons]);

  const currentLesson = useMemo(
    () => lessons?.find((lesson) => lesson.id === currentLessonId),
    [currentLessonId, lessons]
  );

  return (
    <main className="flex h-screen dark:bg-gray-950">
      <CourseSidebar
        lessons={lessons}
        currentLessonId={currentLessonId}
        setCurrentLessonId={setCurrentLessonId}
        courseId={courseId}
      />
      <div className="w-full px-8 py-6 pt-10 mx-6 border border-gray-700 mt-14 dark:bg-gray-900 rounded-t-3xl">
        <p>Course: {courseId}</p>
        <p>Current lesson: {currentLesson?.title}</p>
      </div>
    </main>
  );
};

export default CoursePage;
