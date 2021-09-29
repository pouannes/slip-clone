import { XIcon } from '@heroicons/react/outline';

type TagPropsNormal = {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  canDelete?: false;
};

type TagPropsCanDelete = {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  canDelete?: true;
  onDelete: () => void;
};

export type TagProps = TagPropsNormal | TagPropsCanDelete;

export const Tag = (props: TagProps): JSX.Element => {
  return (
    <div
      className={`px-3 py-1 rounded-full bg-accentDark flex items-center ${
        props.canDelete ? 'cursor-pointer hover:bg-accentDarkLight' : ''
      } ${props.className}`}
      style={{ height: 'fit-content' }}
      onClick={props.canDelete ? props.onDelete : undefined}
    >
      {props.children}
      {props.canDelete ? <XIcon className="w-4 h-4 ml-1" /> : null}
    </div>
  );
};
