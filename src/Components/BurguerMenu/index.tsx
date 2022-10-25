import { useState } from "react";
import { Container } from "./styles";

interface BurguerMenuProps {
  setOpenBurguerMenu: any;
}

const BurguerMenu = ({ setOpenBurguerMenu }: BurguerMenuProps) => {
  const [isLogged, setIsLogged] = useState(false);

  const closeRedirect = () => {
    setOpenBurguerMenu(false);
  };

  return (
    <Container>
      <div className="modalContainer">
        <div className="menuFeatures">
          <p onClick={() => closeRedirect()}>Carros</p>
          <p onClick={() => closeRedirect()}>Motos</p>
          <p onClick={() => closeRedirect()}>Leilão</p>
        </div>
        {isLogged ? (
          <div className="menuUser">
            <p onClick={() => closeRedirect()}>Editar Perfil</p>
            <p onClick={() => closeRedirect()}>Editar Endereço</p>
            <p onClick={() => closeRedirect()}>Minhas compras</p>
            <p onClick={() => closeRedirect()}>Sair</p>
          </div>
        ) : (
          <div className="menuUser">
            <p onClick={() => closeRedirect()}>Fazer login</p>
            <button onClick={() => closeRedirect()}>Cadastrar</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default BurguerMenu;
