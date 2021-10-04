import { SyntheticEvent, MutableRefObject } from "react";

type Props = {
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
};

const TextArea = (props: Props) => {
  return <textarea />;
};

export default TextArea;
