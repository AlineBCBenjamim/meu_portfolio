import styled from "styled-components"

export const Nav = styled.nav`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background: #9e77e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .logo {
    font-size: 2.5rem;
    color: #d2aee9;
    font-weight: 600;
    cursor: default;
  }

  .navbar a {
    font-size: 1.7rem;
    color: #d2aee9;
    margin-left: 4rem;
    transition: 0.3s;
  }

  .navbar a:hover,
  .navbar a.active {
    color: #441263;
  }

  .menu {
    font-size: 3.6rem;
    color: #d2aee9;
    display: none;
  }
`;