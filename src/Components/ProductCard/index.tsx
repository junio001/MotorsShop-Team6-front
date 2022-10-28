import { FunctionComponent } from "react";
import { Iproduct } from "../../interfaces";
import { Container } from "./styles";

export const ProductCard: FunctionComponent<Iproduct> = ( { data } ) => {

  return (
    <Container>
        <div className="capa">
          <img src={data.capa} alt={"capa"}/>
          {data.status && <div className="status">{data.status}</div>}
        </div> 
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
    </Container>
  );
};
