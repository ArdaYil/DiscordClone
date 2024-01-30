interface Props {
  children: string;
  onClick?: (value: string) => void;
}

const Option = ({ children, onClick = () => {} }: Props) => {
  return (
    <option className="option" onClick={() => onClick(children)}>
      {children}
    </option>
  );
};

export default Option;
