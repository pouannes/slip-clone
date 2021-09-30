import React from "react";

type Props = {
  label: string;
  selected: boolean;
  handleClick: () => void;
  index: number;
};

const SidebarLink = ({ label, selected, handleClick, index }: Props) => {
  return (
    <a
      className={`flex items-center px-2 py-2 rounded-md dark:hover:bg-gray-800 cursor-pointer ${
        selected ? "dark:bg-gray-790 dark:hover:bg-gray-790" : ""
      }`}
      onClick={handleClick}
    >
      <span className="mr-2 font-semibold">{index}.</span>
      <span>{label}</span>
    </a>
  );
};

export default SidebarLink;
