import styled from "styled-components";

export const Container = styled.nav`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 0px;
gap: 0px;
width: 735px;
height: 388px;
position: relative;
box-sizing: border-box;
border-radius: 4px;

&:hover {
  .capa .sobreposicao {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }
  .capa .sobreposicao .anunciante .thumb {
    background: #41268E;
  }
}

.capa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 326px;
  background: #E9ECEF;
  position: relative;
  top: 0px;
  border-radius: 4px 4px 0 0;

  img {
    height: 100%;
    position: absolute;
    top: 0px;
  }

  .sobreposicao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px 36px 20px 36px;
    gap: 16px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    border-radius: 4px 4px 0 0;


    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 177px;
      width: 100%;
    }


    .prazo {
      font-family: 'Lexend', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 123px;
    height: 36px;
    padding: 0;
    background: var(--whitefixed);
    color: var(--grey1);
    border-radius: 32px;
      svg {
        color: var(--brand1);
        width: 20px;
        height: 20px;
      }
  }


.titulo {
  width: 100%;
  height: 22px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: var(--grey10);
}

.descricao {
  width: 100%;
  height: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey5);
  overflow: hidden;
  text-overflow: ellipsis;
}

.anunciante {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  .thumb {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--brand2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .usuario {
    color: var(--whitefixed);
  }
}

span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--brand1);
  width: 100%;
  .quilometragem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    width: 51px;
    height: 32px;
    background: var(--brand4);
    border-radius: 4px;
  }
  .ano {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    width: 51px;
    height: 32px;
    background: var(--brand4);
    border-radius: 4px;
  }
  .valor {
    margin-left: auto;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;
    color: var(--whitefixed);
    padding: 0;
  }
}


  }


}



.acesso {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: var(--whitefixed);
    height: 62px;
    width: 100%;
    background-color: var(--brand1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    border-radius: 0 0 4px 4px;
    svg {
      color: var(--whitefixed);
      font-size: 26px;
    }
  }


  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    span{
      flex-direction: column;

    }
  }
`;
