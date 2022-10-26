import { FunctionComponent } from "react";
import InputWrapper from "./styles";

type InputProps = {
  type: string;
  label: string;
  placeholder: string;
};

const Input: FunctionComponent<InputProps> = ({ type, label, placeholder }) => {
  return (
    <InputWrapper>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
