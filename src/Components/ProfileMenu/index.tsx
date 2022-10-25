import { Container } from "./styles";

interface ProfileMenuProps {
  setOpenProfileMenu: any;
}

export const ProfileMenu = ({ setOpenProfileMenu }: ProfileMenuProps) => {
  const closeRedirect = () => {
    setOpenProfileMenu(false);
  };
  return (
    <Container onClick={() => setOpenProfileMenu(false)}>
      <div className="modalContainerProfile">
        <div className="menuFeaturesProfile">
          <p onClick={() => closeRedirect()}>Editar Perfil</p>
          <p onClick={() => closeRedirect()}>Editar Endereço</p>
          <p onClick={() => closeRedirect()}>Minhas compras</p>
          <p onClick={() => closeRedirect()}>Sair</p>
        </div>
      </div>
    </Container>
  );
};
