import LoadingSpinner from '@/public/loading-spinner.svg';

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  srName?: string;
  loading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  srName,
  loading,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`flex items-center p-1 transition duration-200 ease-in-out rounded-md cursor-pointer w-7 h-7 text-textSecondary hover:text-textPrimary hover:bg-bgPaperSecondary focus:text-accent focus:ring-accent focus:ring-2 focus:outline-none text-textPrimary ${className}`}
    >
      {srName ? <span className="sr-only">{srName}</span> : null}
      {loading ? (
        <LoadingSpinner className={'h-5 w-5 absolute left-1'} />
      ) : (
        children
      )}
    </button>
  );
};
