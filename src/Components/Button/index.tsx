import { StyledButton } from "./styles";
import { Iprops } from "../../interfaces";

export const Button: React.FC<Iprops> = (props) => {
  const { className, onClick, children, design, ...rest } = props;
  return (
    <StyledButton
      onClick={onClick}
      design={design}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
