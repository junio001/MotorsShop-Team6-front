import styled from "styled-components";

export const Container = styled.nav`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #495057;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 2px solid #dee2e6;
  height: 80px;

  h1 {
    margin: 0;
    font-size: 32px;
    background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 20px;
  }
  button {
    background-color: white;
    border: none;
    font-size: 20px;
  }
  .DesktopNav {
    display: none;
  }
  .menuFeaturesDesktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 44px;
  }
  .menuFeaturesDesktop > p {
    cursor: pointer;
  }
  .greyBar {
    width: 2px;
    height: 79px;
    background: #dee2e6;
  }
  .menuNotLoggedUserDesktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 44px;
  }
  .menuNotLoggedUserDesktop > button {
    font-family: Inter, Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    height: 40px;
    border: 1.5px solid #adb5bd;
    border-radius: 4px;
  }
  .menuLoggedUserDesktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .menuLoggedUserDesktop > div,
  p {
    cursor: pointer;
  }
  .menuLoggedUserDesktop > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    width: 31px;
    margin-right: 10px;
    background: #5126ea;

    border-radius: 150px;
  }
  .menuLoggedUserDesktop > div > span {
    width: 18px;

    font-family: Inter, Sans-Serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #ffffff;
  }
  .menuLoggedUserDesktop > p {
  }

  @media (min-width: 1024px) {
    padding: 0px 60px;
    .mobileNav {
      display: none;
    }
    .DesktopNav {
      display: block;
    }
  }
`;
