import Option from "./Option";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export type Value = string | number;

interface Props {
  name: string;
  list: Array<Value>;
  value: Value;
  onSelect: (value: Value) => void;
}

const Select = ({ list, value, onSelect, ...rest }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const selectElementRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
  };

  useEffect(() => {
    const selectElement = selectElementRef.current;

    if (!selectElement) return;

    document.addEventListener("click", (e) => {
      if (expanded === false) return;

      const x = e.clientX;
      const y = e.clientY;
      const rect = selectElement.getBoundingClientRect();

      if (
        x < rect.x ||
        x > rect.x + rect.width ||
        y < rect.y ||
        y > rect.y + rect.height
      )
        setExpanded(false);
    });
  });

  return (
    <div className="select-holder" {...rest}>
      <div ref={selectElementRef} onClick={toggleExpanded} className="select">
        <p className="value-display">{value}</p>
        <FaAngleDown />
      </div>
      {expanded && (
        <div className="dropdown-list-wrapper">
          <div className="dropdown-list">
            {list.map((element) => (
              <Option onClick={handleSelect}>{element as string}</Option>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
