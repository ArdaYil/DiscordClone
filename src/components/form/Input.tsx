import { ReactNode } from "react";
import { FormChangeEvent } from "./Form";
import InputLabel from "./InputLabel";

type InputType = "TEXT" | "PASSWORD";

interface Props {
  title: string;
  onChange: (e: FormChangeEvent) => void;
  name: string;
  required?: boolean;
  error?: string;
  type?: InputType;
  icon?: ReactNode;
  className?: string;
}

const Input = ({
  title,
  onChange,
  name,
  icon,
  className = "",
  required = true,
  error,
  type = "TEXT",
}: Props) => {
  const inputFieldClassName = className ? className + "-input-field" : "";

  return (
    <label className={`text-input ${className}`}>
      <InputLabel
        title={title}
        className={className}
        required={required}
        error={error}
      ></InputLabel>
      <div className="input-field-container">
        <input
          name={name}
          onChange={onChange}
          type={type}
          className={`input-field ${inputFieldClassName}`}
        />
        {icon}
      </div>
    </label>
  );
};

export default Input;
