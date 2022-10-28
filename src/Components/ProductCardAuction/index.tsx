import { FunctionComponent } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { Iauction } from "../../interfaces";
import { Container } from "./styles";

export const ProductCardAuction: FunctionComponent<Iauction> = ( { data } ) => {

  return (
    <Container>
        <div className="capa">
          <img src={data.capa} alt={"capa"}/>
          <div className="sobreposicao">
            <div className="prazo"><IoMdTime/> {data.prazo}</div>
            <span className="info">
              <div className="titulo">{data.titulo}</div>
              <div className="descricao">{data.descricao}</div>
              <span className="anunciante">
                <div className="thumb">{data.usuario.charAt(0)}</div>
                <div className="usuario">{data.usuario}</div>
              </span>
              <span>
                <div className="quilometragem">{data.quilometragem}</div>
                <div className="ano">{data.ano}</div>
                <div className="valor">{data.valor}</div>
              </span>
            </span>
          </div>
        </div> 
        <div className="acesso">Acessar página do leilão <BsArrowRight/></div>
    </Container>
  );
};
