import styled from "styled-components";

export const Container = styled.div`
  font-family: Inter, Sans-Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #495057;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 82px;
  left: 0;
  animation: appearFromTop 0.5s;
  display: flex;
  justify-content: right;
  background-color: rgba(0, 0, 0, 0.3);

  .modalContainer {
    width: 100%;
    background-color: white;
    height: 50px;
    margin: 0;
  }

  .menuFeatures,
  .menuUser {
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px;
    gap: 10px;
    border-bottom: 2px solid #dee2e6;
  }
  .menuUser > p {
    margin-top: 0px;
  }
  .menuUser > button {
    font-family: Inter, Sans-Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #495057;
    line-height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 100%;
    height: 40px;
    border: 1.5px solid #adb5bd;
    border-radius: 4px;
  }

  @keyframes appearFromTop {
    from {
      transform: translateY(-30px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
