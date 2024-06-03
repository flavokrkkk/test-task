import { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};

export default Input;
