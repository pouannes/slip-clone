import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";

const Student: NextPage = () => {
  return (
    <main className="flex h-screen dark:bg-gray-800">
      <Sidebar />
      <div className="w-full px-4 py-6">
        <header className="mb-10">
          <h1 className="">Student</h1>
        </header>
      </div>
    </main>
  );
};

export default Student;
