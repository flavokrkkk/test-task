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
        <option selected={selected} key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
