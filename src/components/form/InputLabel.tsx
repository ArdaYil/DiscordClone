interface Props {
  title: string;
  className: string;
  required?: boolean;
  error?: string;
}

const InputLabel = ({ title, className, required, error }: Props) => {
  const titleClassName = className ? className + "-input-title" : "";

  const getTitleText = () => {
    return error ? (
      <span className="input-error"> - {error}</span>
    ) : (
      required && <span className="input-required">*</span>
    );
  };

  return (
    <p className={`input-title ${titleClassName} ${error && "error"}`}>
      {title}
      {getTitleText()}
    </p>
  );
};

export default InputLabel;
