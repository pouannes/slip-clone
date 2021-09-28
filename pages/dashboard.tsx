import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <main className="flex h-screen dark:bg-gray-800">
      <Sidebar />
      <h1 className="">Dashboard</h1>
    </main>
  );
};

export default Dashboard;
