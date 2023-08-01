import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
   }
   #root{
      --bg-color: #9E77E6;
      --second-bg-color: #CA77FC;
      --text-color: ##d2aee9;
      --main-color: #8177FC;   
   }

   html {
      font-size: 62.5%;
      overflow-x: hidden ;
   }

   body {
      background: var(--bg-color);
      color: var(--text-color);
   }
`;