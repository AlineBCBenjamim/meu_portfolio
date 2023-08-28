import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import avatar from "../../assets/avatar.png";
import { Home } from "./styled";

const HomePage = () => {
  return (
    <>
      <Home>
        <section className="container-home">
          <div className="home-content">
            <h3>Olá visitante, meu nome é</h3> <h2>Aline Benjamim</h2>
            <h3>Desenvolvedora Full Stack</h3>
            <h2 className="text-line typing-animation">
              Bem vindo ao meu portfólio
            </h2>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/alinebcarvalhobenjamim/"
                target={"_blank"} rel="noreferrer" 
              >
                <img
                  className="linkedin"
                  src={linkedin}
                  alt="icon linkedin"
                  rel="noopener noreferrer"
                />
              </a>
              <a href="https://github.com/AlineBCBenjamim" target={"_blank"} rel="noreferrer">
                <img
                  src={github}
                  alt="icone gitHub"
                  rel="noopener noreferrer"
                />
              </a>
            </div>
          </div>
          <img className="home-img" src={avatar} alt="profile picture" />
        </section>
      </Home>
    </>
  );
};

export default HomePage;
