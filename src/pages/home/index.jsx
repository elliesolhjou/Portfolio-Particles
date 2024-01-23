import "./style.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Animate } from "react-simple-animate";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I am Ellie.
          <br />A Full Stack Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <div className="contact-wrapper">
            <div className="contact-wrapper__button-wrapper">
              <button>Email Me</button>
              <button>Download Resume</button>
            </div>
            <div className="contact-wrapper__social-wrapper">
              <FaLinkedin size={40} />
              <FaGithub size={40} />
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
