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
  top: 0px;
  left: 0;
  display: flex;
  justify-content: right;
  animation: appearFromTop 0.5s;
  .modalContainerProfile {
    margin-top: 75px;
    width: 200px;
    background: #f8f9fa;
    box-shadow: 4px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    height: 200px;
    margin-right: 15px;
  }

  .menuFeaturesProfile {
    font-family: Inter, Sans-Serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0px 16px;
    height: 200px;
  }
  .menuFeaturesProfile > p {
    margin: 0;
  }
  @keyframes appearFromTop {
    from {
      transform: translateY(-30px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
