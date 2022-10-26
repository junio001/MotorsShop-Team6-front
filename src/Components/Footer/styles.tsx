import styled from "styled-components";

export const Container = styled.div`
  background-color: #0b0d0d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 0px;
  gap: 60px;
  font-family: Inter, Sans-Serif;
  font-style: normal;

  font-size: 16px;
  line-height: 28px;

  .shopName {
    font-weight: 600;
    font-size: 32px;
    margin: 0;
  }
  .shopName > span {
    font-size: 20px;
  }
  .shopRights > svg {
    margin-right: 5px;
  }
  .shopRights {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  .FooterButton {
    width: 50px;
    height: 50px;
    background: #212529;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 700;
  }
  .FooterButton > svg {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 45px 59px;
    gap: 10px;
  }
`;
