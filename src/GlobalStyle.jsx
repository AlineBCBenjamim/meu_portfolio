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
    /* font-family: 'Belanosima', sans-serif; */
   }
   #root{
      --bg-color: #9E77E6;
      --second-bg-color: #CA77FC;
      --text-color: ##d2aee9;
      --main-color: #D8D8D8;   
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