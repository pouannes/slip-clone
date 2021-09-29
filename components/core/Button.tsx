import LoadingSpinner from "@/public/loading-spinner.svg";

type variant = "contained" | "outlined";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`bg-accent focus:outline-none focus:ring-2 focus:ring-offset-bgPaper focus:ring-offset-2 focus:ring-accent text-bgDefault px-8 py-2 ring-offset-current  rounded-md flex items-center relative  ${className}`}
    >
      {loading ? (
        <LoadingSpinner className={"h-5 w-5 absolute left-1"} />
      ) : null}
      {children}
    </button>
  );
};
