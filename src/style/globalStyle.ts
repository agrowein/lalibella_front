import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
// @ts-ignore
import EBGaramond from '../assets/fonts/EBGaramond.ttf';

export default css`
  ${emotionReset}
  
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  div {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Garamond';
    src: url(${EBGaramond}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;