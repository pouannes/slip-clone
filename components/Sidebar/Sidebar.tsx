import React from "react";
import SidebarLink from "./SidebarLink";
import { HomeIcon, AcademicCapIcon, UserIcon } from "@heroicons/react/outline";
import LogoutButton from "./LogoutButton";

const Sidebar = (): JSX.Element => {
  const iconClass = "w-6 h-6 mr-3";
  return (
    <nav className="flex flex-col w-64 h-full gap-4 px-2 py-4 text-sm dark:bg-gray-900 rounded-r-3xl">
      <h2 className="mb-6 text-3xl">Slip</h2>
      <SidebarLink
        href="/dashboard"
        icon={<HomeIcon className={iconClass} />}
        label="Course Dashboard"
      />
      <SidebarLink
        href="/student"
        icon={<AcademicCapIcon className={iconClass} />}
        label="Purchased Courses"
      />
      <SidebarLink
        icon={<UserIcon className={iconClass} />}
        label="pierreouannes@gmail.com"
      />
      <LogoutButton iconClass={iconClass} />
    </nav>
  );
};

export default Sidebar;
