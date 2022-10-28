import styled from "styled-components";

export const Container = styled.nav`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px 0 160px 0;
gap: 10px;
background-color: var(--brand2);

width: 100%;
height: 583px;

h1 {
  font-family: 'Lexend', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 56px;
  color: var(--grey10);
  text-align: center;
  max-width: 748px;
}

h2 {
  font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: var(--grey9);
}

span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 21px;
  button {
    border: 1.5px solid var(--grey10);
    color: var(--grey10);
    border-radius: 4px;
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
