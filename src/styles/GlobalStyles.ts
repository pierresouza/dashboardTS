import { createGlobalStyle } from "styled-components";

import BG from "../assets/img/BG.svg";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color:#000000 ;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${BG});
}
`;
