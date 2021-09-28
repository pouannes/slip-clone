import { useRouter } from "next/dist/client/router";
import React from "react";

type Props = {
  href?: string;
  icon?: JSX.Element;
  label: string;
};

const SidebarLink = ({ href, icon, label }: Props) => {
  const router = useRouter();

  const selected = href === router.pathname;

  return (
    <a
      href={href}
      className={`flex items-center px-2 py-2 rounded-md dark:hover:bg-gray-800 ${
        selected ? "dark:bg-gray-700" : ""
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SidebarLink;
