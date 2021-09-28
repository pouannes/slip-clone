import { LogoutIcon } from "@heroicons/react/outline";

type Props = {
  iconClass: string;
};

const LogoutButton = ({ iconClass }: Props): JSX.Element => {
  return (
    <button
      className="flex items-center px-2 py-2 text-sm text-left rounded-md dark:hover:bg-gray-800"
      onClick={() => alert("TODO: log out the user")}
    >
      <LogoutIcon className={iconClass} />
      Log Out
    </button>
  );
};

export default LogoutButton;
