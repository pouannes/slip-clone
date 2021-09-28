import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex h-screen dark:bg-gray-800">
      <Sidebar />
      <h1 className="">Index</h1>
    </main>
  );
};

export default Home;
