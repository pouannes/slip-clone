import SidebarLink from "./SidebarLink";
import { HomeIcon, AcademicCapIcon, UserIcon } from "@heroicons/react/outline";
import LogoutButton from "./LogoutButton";
import SlipIcon from "@/public/slip-icon.svg";

const Sidebar = (): JSX.Element => {
  const iconClass = "w-6 h-6 mr-3";
  return (
    <nav className="flex flex-col h-full px-2 text-sm min-w-64 max-w-64 dark:bg-gray-950 rounded-r-3xl">
      <SlipIcon className="h-10 my-5" />
      <div className="flex flex-col gap-4 pt-10">
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
      </div>
    </nav>
  );
};

export default Sidebar;
