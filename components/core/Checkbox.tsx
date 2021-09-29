import { MutableRefObject } from 'react';

export type CheckboxProps = {
  checked: boolean;
  toggleCheck: () => void;
  name: string;
  className?: string;
  label?: string;
  required?: boolean;
  inputClassName?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null> | undefined;
};

export const Checkbox = ({
  checked,
  toggleCheck,
  name,
  required,
  className,
  label,
  inputClassName,
  inputRef,
}: CheckboxProps): JSX.Element => {
  return (
    <div className={`${className}`}>
      {label ? (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-textSecondary"
        >
          {label} {required ? '*' : ''}
        </label>
      ) : null}
      <input
        checked={checked}
        onChange={toggleCheck}
        name={name}
        type="checkbox"
        className={`outline-none focus:ring-offset-bgPaper border-none rounded h-5 w-5 ${inputClassName}`}
        ref={inputRef}
      />
    </div>
  );
};
