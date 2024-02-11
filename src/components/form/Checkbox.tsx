import React from "react";
import { ReactNode, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FormChangeEvent } from "./Form";

interface Props {
  id: string;
  name: string;
  onChange: (e: FormChangeEvent) => void;
  children: string | ReactNode;
  className?: string;
}

const Checkbox: React.FC<Props> = ({
  id,
  name,
  onChange,
  children,
  className = "",
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleChecked = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange({
      target: { name: name, value: "", type: "checkbox", checked: newValue },
    } as FormChangeEvent);
  };

  const checkboxClassName = `checkbox ${isChecked ? "checked" : ""}`;

  const getTextContent = () =>
    React.Children.map(children, (child) => {
      if (
        React.isValidElement(child) &&
        child.props.className === "checkbox-clickable" &&
        child.type === "span"
      ) {
        return React.cloneElement(child, {
          onClick: toggleChecked,
        } as React.HTMLAttributes<HTMLSpanElement>);
      }
      return child;
    });

  const getClickProp = (value: boolean) => {
    const result = typeof children === "string";
    return result === value ? { onClick: toggleChecked } : {};
  };

  return (
    <div className={`checkbox-container ${className}`} {...getClickProp(true)}>
      <div {...getClickProp(false)} className={checkboxClassName} id={id}>
        <FaCheck className="checkbox-check" size={17} color="#f5f5f5" />
      </div>
      <p style={{ userSelect: "none" }} className="checkbox-label">
        {typeof children === "string" ? children : getTextContent()}
      </p>
    </div>
  );
};

export default Checkbox;
