import styled from "styled-components";

export const Home = styled.main`
  .container-home {
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #3b3a3a;
    background: #d8d8d8;
  }

  .home-img {
    width: 300px;
    border-radius: 200px;
  }

  .home-content h2 {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1.3;
    color: #652b80;
  }

  .home-content h3 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.3;
  }

  .text-line {
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    color: rgba(255, 255, 255, 0.75);
    font-size: 3em;
    text-align: start;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    width: 0; /* Inicialmente, define a largura como 0 */
  }

  .typing-animation {
    animation: blinkCursor 500ms steps(30) infinite normal,
      typing 4s steps(30) 1s normal both;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 14em;
    }
  }

  @keyframes blinkCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;