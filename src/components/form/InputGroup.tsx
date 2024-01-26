import { ReactNode } from "react";

interface Props {
  children: ReactNode[];
}

const InputGroup = ({ children }: Props) => {
  return <section className="input-group">{children}</section>;
};

export default InputGroup;
