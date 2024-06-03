import { FC, FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
