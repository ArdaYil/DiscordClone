interface Props {
  className?: string;
  type: "submit" | "reset" | "button";
  children: string;
  enabled?: boolean;
  toolTip?: string;
}

const Button = ({
  className,
  children,
  enabled = true,
  toolTip,
  ...rest
}: Props) => {
  const newClassName = `btn ${className}`;
  const containerClassName = `btn-container ${!enabled ? "disabled" : ""}`;

  return (
    <div className={containerClassName}>
      <button className={newClassName} {...rest}>
        {children}
      </button>
      <div className="btn-tool-tip">{toolTip}</div>
    </div>
  );
};

export default Button;
