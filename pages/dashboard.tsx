import { CourseList, AddCourseButton } from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { Course } from "@/types/Course";
import type { NextPage } from "next";

const dummyData: Course[] = [
  {
    name: "Brand New Course",
    status: "draft",
  },
  {
    name: "Learn how to use maps in React (working title)",
    status: "draft",
  },
  {
    name: "Very long title Very long titleVery long titleVery long titleVery long titleVery long titleVery long title",
    status: "draft",
  },
];

const Dashboard: NextPage = () => {
  return (
    <main className="flex h-screen dark:bg-gray-800">
      <Sidebar />
      <div className="w-full px-4 py-6">
        <header className="mb-10">
          <h1 className="text-3xl">Your courses</h1>
        </header>
        <CourseList courses={dummyData} />
        <AddCourseButton />
      </div>
    </main>
  );
};

export default Dashboard;
