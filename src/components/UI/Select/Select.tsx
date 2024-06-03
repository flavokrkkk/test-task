import { FC, SyntheticEvent } from "react";
import { Options } from "../../../models/Options";

interface SelectProps {
  options: Options[];
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map(({ value, label, selected }) => (
        <option key={value} value={value} selected={selected}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
