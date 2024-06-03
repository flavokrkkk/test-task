import { Options } from "../models/Options";

export const options: Options[] = [
  {
    value: "выберите критерий",
    label: "Выберите критерий",
    selected: true,
    disabled: true,
  },
  { value: "user", label: "User", selected: false, disabled: false },
  { value: "repo", label: "Repo", selected: false, disabled: false },
];
