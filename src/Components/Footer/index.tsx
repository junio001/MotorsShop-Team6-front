import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Container } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <p className="shopName">
        Motors <span>shop</span>
      </p>
      <p className="shopRights">
        <AiOutlineCopyrightCircle /> 2022 - Todos os direitos reservados.{" "}
      </p>
      <button className="FooterButton">
        <MdOutlineKeyboardArrowUp />
      </button>
    </Container>
  );
};
