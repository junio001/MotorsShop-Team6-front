import styled from "styled-components";

export const Container = styled.nav`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 0px;
gap: 16px;
width: 312px;
height: 350px;

&:hover {
  .capa {
    border: 2px solid var(--brand1);

  }
}

.capa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 312px;
  height: 152px;
  background: #E9ECEF;
  border: 2px solid #E9ECEF;
  position: relative;
  img {
    height: 100%;
  }
  .status {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    width: 51px;
    height: 24px;
    position: absolute;
    top: 11px;
    left: 16px;
    background: var(--brand1);
    color: var(--whitefixed);
  }
}

.titulo {
  width: 100%;
  height: 22px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey1);
}

.descricao {
  width: 100%;
  height: 48px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey2);
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
    color: var(--grey2);
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
    color: var(--grey1);
    padding: 0;
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
