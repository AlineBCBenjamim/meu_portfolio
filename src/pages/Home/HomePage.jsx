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
            <h2 className="text-line typing-animation">Bem vindo ao meu portfólio</h2>
            
            <div className="social-media">
              <img className="linkedin" src={linkedin} alt="icon linkedin" />
              <img className="github" src={github} alt="icon github" />
            </div>
          </div>
          <img className="home-img" src={avatar} alt="profile picture" />
        </section>
      </Home>
    </>
  );
};

export default HomePage;
