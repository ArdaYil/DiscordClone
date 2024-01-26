interface Props {
  className?: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
  children: string;
}

const Button = ({ className, children, ...rest }: Props) => {
  const finalClassName = `btn ${className}`;

  return (
    <button className={finalClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
