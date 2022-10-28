import styled from "styled-components";

interface Props {
  show: boolean;
}

export const Container = styled.div<Props>`
display: ${props => props.show ? 'flex': 'none'};
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
height: 100%;
position: fixed;
z-index: 99;
background: rgba(0, 0, 0, 0.5);

.modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 24px 32px 24px;
  gap: 32px;
  min-width: 520px;
  min-height: 249px;
  background: #FFFFFF;
  border-radius: 8px;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--grey1);

}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
