import { ChangeEvent, FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onSubmit: () => void;
}

export type FormChangeEvent = ChangeEvent<HTMLInputElement>;

const Form = ({ children, className, onSubmit }: Props) => {
  const componentClass = className + " form";
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={componentClass} onSubmit={submit}>
      {children}
    </form>
  );
};

export default Form;
