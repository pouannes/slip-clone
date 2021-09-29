import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

type option<T> = {
  value: T;
  label: string;
};

type SelectProps<T> = {
  options: option<T>[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
  name?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

const Select = <T,>({
  options,
  value,
  onChange,
  label,
  name,
  className = '',
  required = false,
  error = false,
  helperText,
}: SelectProps<T>): JSX.Element => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={`relative mt-1 ${className}`}>
        {label ? (
          <Listbox.Label className="block text-sm font-medium text-textSecondary">
            {label} {required ? '*' : ''}
          </Listbox.Label>
        ) : null}
        <Listbox.Button
          name={name}
          className={`relative w-full py-2 pl-3 pr-10 mt-1 text-left rounded-md shadow-sm cursor-pointer focus:ring-accent focus:border-accent bg-bgPaper sm:text-sm text-textPrimary border h-[38px] border-gray-500 border-${
            error ? 'red-400' : 'gray-500'
          }`}
        >
          <span className="block truncate">
            {options.find((item) => item.value === value)?.label}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        {helperText ? (
          <p
            className={`mt-1 ml-3 text-xs ${
              error ? 'text-red-400' : 'text-textSecondary'
            }`}
          >
            {helperText}
          </p>
        ) : null}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-bgPaper max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `${
                    active
                      ? 'text-textPrimary bg-bgPaperSecondary'
                      : 'text-textSecondary'
                  }
                              cursor-pointer select-none relative py-2 pl-10 pr-4 h-9`
                }
                value={option.value}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected
                          ? 'font-medium text-textPrimary'
                          : 'font-normal'
                      } block truncate`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className={`${active ? 'text-accent' : 'text-accent'}
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export { Select };
