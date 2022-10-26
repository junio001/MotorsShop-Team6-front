import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import BurguerMenu from "../BurguerMenu";
import { ProfileMenu } from "../ProfileMenu";
interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  const [openBurgerMenu, setOpenBurguerMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const initialLetters = name.split(" ");

  const openProfileFunction = () => {
    if (openProfileMenu) {
      return setOpenProfileMenu(false);
    }
    return setOpenProfileMenu(true);
  };

  return (
    <Container>
      <h1>
        Motors <span>shop</span>
      </h1>
      <div className="mobileNav">
        {openBurgerMenu ? (
          <button onClick={() => setOpenBurguerMenu(false)}>
            <AiOutlineClose />
          </button>
        ) : (
          <button onClick={() => setOpenBurguerMenu(true)}>
            <GiHamburgerMenu />
          </button>
        )}
      </div>
      <div className="DesktopNav">
        <div className="menuFeaturesDesktop">
          <p>Carros</p>
          <p>Motos</p>
          <p>Leilão</p>
          <div className="greyBar"></div>

          {isLogged ? (
            <div
              onClick={() => openProfileFunction()}
              className="menuLoggedUserDesktop"
            >
              <div>
                <span>
                  {initialLetters[0][0]}
                  {initialLetters[1][0]}
                </span>
              </div>
              <p>{name}</p>
            </div>
          ) : (
            <div className="menuNotLoggedUserDesktop">
              <p>Fazer login</p>
              <button>Cadastrar</button>
            </div>
          )}
        </div>
      </div>
      {openProfileMenu && (
        <ProfileMenu setOpenProfileMenu={setOpenProfileMenu} />
      )}
      {openBurgerMenu && (
        <BurguerMenu setOpenBurguerMenu={setOpenBurguerMenu} />
      )}
    </Container>
  );
};
