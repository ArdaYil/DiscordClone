import Input from "./Input";
import { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import Icon from "../common/Icon";

type PasswordStatus = "VISIBLE" | "HIDDEN";

const PasswordInput = () => {
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
      type={inputType}
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
