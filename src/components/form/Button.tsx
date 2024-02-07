import { useState } from "react";

interface Props {
  className?: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
  children: string;
  enabled: boolean;
  toolTip: string;
}

const Button = ({ className, children, enabled, toolTip, ...rest }: Props) => {
  const newClassName = `btn ${className} ${!enabled ? "disabled" : ""}`;

  return (
    <div className="btn-container">
      <button className={newClassName} {...rest}>
        {children}
      </button>
      <div className="btn-tool-tip">{toolTip}</div>
    </div>
  );
};

export default Button;
