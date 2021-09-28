import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";

const Student: NextPage = () => {
  return (
    <main className="flex h-screen dark:bg-gray-800">
      <Sidebar />
      <h1 className="">Student</h1>
    </main>
  );
};

export default Student;
