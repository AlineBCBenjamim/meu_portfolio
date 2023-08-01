import { Nav } from "./styled";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <header className="header">
          <div className="logo"> {"{ }"} </div>

          <img className="menu" src={menu} alt="icone do menu" />

          <nav className="navbar">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </Nav>
    </>
  );
};

export default Navbar;
