import styled from "@emotion/styled";

// @ts-ignore
import gradient from '../../../../src/assets/images/gradient.png';

export const StartStyled = styled.div`
  background-color: #cee2e1;
  height: 100%;
  
  padding: 36px 0 0 0;
  
  background-image: url(${gradient});
  background-size: contain;
  background-repeat: no-repeat !important;

  position: relative;
  overflow: hidden;
  animation: background-animation 10s ease-in-out;
  animation-iteration-count: infinite;
  .block {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 25%;
    left: 15%;
    .title, .subtitle {
      font-family: Garamond, sans-serif;
      color: #504f17;
      z-index: 100;
    }
    .title {
      letter-spacing: 10px;
      font-size: 4.5em;
      align-self: center;
      text-align: center;
      ::after {
        content: '';
        display: block;
        height: 3px;
        width: 70%;
        color: #504f17;
        background-color: #504f17;
        margin: 0 auto;
      }
    }
    .subtitle {
      letter-spacing: 16px;
      font-size: 2.5em;
      align-self: center;
      font-weight: bold;
      position: relative;
      text-align: center;
      margin-top: 6px;
    }
  }
  
  
  .buket {
    width: 700px;
    height: 700px;
    position: absolute;
    bottom: -20px;
    right: -20px;
    animation-name: swing;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  
  .flower1 {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: -5%;
    animation: rotation 10s ease-in-out infinite;
  }

  @keyframes swing {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  
  @keyframes background-animation {
    0% {
      background-position-y: -10px;
    }
    33% {
      background-position-y: 0;
    }
    66% {
      background-position-y: -20px;
    }
    100% {
      background-position-y: -10px;
    }
  }
`;