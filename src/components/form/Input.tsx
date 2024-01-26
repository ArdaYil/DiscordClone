import { HTMLInputTypeAttribute, ReactNode } from "react";

type InputType = "TEXT" | "PASSWORD";

interface Props {
  title: string;
  required?: boolean;
  type?: InputType;
  icon?: ReactNode;
}

const Input = ({ title, icon, required = true, type = "TEXT" }: Props) => {
  return (
    <label className="text-input">
      <p className="input-title">
        {title}
        {required && <span className="input-required">*</span>}
      </p>
      <div className="input-field-container">
        <input type={type} className="input-field" />
        {icon}
      </div>
    </label>
  );
};

export default Input;
