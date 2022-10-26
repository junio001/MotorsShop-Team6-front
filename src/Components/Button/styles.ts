import styled from "styled-components";
import { designButton } from "./design";

interface Props {
  design: string;
}
export const StyledButton = styled.button<Props>`
  width: 119px;
  height: 38px;
  font-size: 14px;

  border: 1.5px solid;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  border-color: var(
    ${({ disabled, design }) => designButton(design, disabled).borderColor}
  );
  background-color: var(
    ${({ disabled, design }) => designButton(design, disabled).backgroundColor}
  );
  color: var(${({ design }) => designButton(design).textColor});

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    color: var(
      ${({ disabled, design }) => !disabled && designButton(design).hoverColor}
    );
    background-color: var(
      ${({ disabled, design }) =>
        !disabled && designButton(design).hoverBackgroundColor}
    );
  }

  @media screen and (min-width: 768px) {
    width: 146px;
    height: 48px;
    font-size: 16px;
  }
`;
