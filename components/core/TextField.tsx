import React, { SyntheticEvent, MutableRefObject } from 'react';

interface TextFieldProps {
  value: string;
  onChange: React.EventHandler<SyntheticEvent>;
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null> | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  required = false,
  error,
  helperText,
  className,
  inputClassName,
  inputRef,
}) => {
  return (
    <div className={className}>
      {label ? (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-textSecondary"
        >
          {label} {required ? '*' : ''}
        </label>
      ) : null}
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          value={value}
          onChange={onChange}
          type="text"
          name={name}
          required={required}
          className={`block w-full pl-3 pr-3 border-${
            error ? 'red-400' : 'gray-500'
          } rounded-md focus:ring-accent focus:border-accent bg-bgPaper text-textPrimary sm:text-sm ${inputClassName}`}
          placeholder={placeholder}
          ref={inputRef}
          aria-label={name}
        />
      </div>
      {helperText ? (
        <p
          className={`mt-1 ml-3 text-xs text-${
            error ? 'red-400' : 'textSecondary'
          }`}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
