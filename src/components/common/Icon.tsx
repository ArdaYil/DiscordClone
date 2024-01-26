interface Props {
  IconComponent: React.ElementType;
  onClick: () => void;
  className: string;
  color: string;
  size: number;
}

const Icon = ({ IconComponent, ...rest }: Props) => {
  return <IconComponent {...rest} />;
};

export default Icon;
