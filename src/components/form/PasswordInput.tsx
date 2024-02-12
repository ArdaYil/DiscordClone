import Input from "./Input";
import { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import Icon from "../common/Icon";
import { FormChangeEvent } from "./Form";

type PasswordStatus = "VISIBLE" | "HIDDEN";

interface Props {
  className?: string;
  name: string;
  error?: string;
  onChange: (e: FormChangeEvent) => void;
}

const PasswordInput = ({ className, error, name, onChange }: Props) => {
  const [status, setStatus] = useState<PasswordStatus>("HIDDEN");
  const inputType = status == "VISIBLE" ? "TEXT" : "PASSWORD";

  const handleClick = () => {
    if (status == "VISIBLE") setStatus("HIDDEN");
    else setStatus("VISIBLE");
  };

  const iconComponent = status === "HIDDEN" ? BiSolidShow : BiSolidHide;

  return (
    <Input
      title="Password"
      name={name}
      type={inputType}
      className={className}
      onChange={onChange}
      error={error}
      icon={
        <Icon
          IconComponent={iconComponent}
          onClick={handleClick}
          className={"input-icon-btn"}
          color={"#fff"}
          size={24}
        />
      }
    />
  );
};

export default PasswordInput;
