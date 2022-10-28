import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey0);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-family: Inter, Sans-Serif;
  font-style: normal;

  font-size: 16px;
  line-height: 28px;
  width: 100%;
  height: 140px;
  margin-top: auto;
  position: relative;

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
    background: var(--grey1);
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
    padding: 0 59px;
    gap: 10px;
  }
`;
