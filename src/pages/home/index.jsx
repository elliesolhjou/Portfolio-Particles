import "./style.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { Animate } from "react-simple-animate";
import { useEffect, useMemo, useState} from "react"
import Particles, { initParticlesEngine }  from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      "background": {
        "color": {
          "value": "#1d1d1d",
        },
      },
      "fpsLimit": 120,
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push",
          },
          "onHover": {
            "enable": true,
            "mode": "repulse",
          },
        },
        "modes": {
          "push": {
            "quantity": 4,
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4,
          },
        },
      },
      "particles": {
        "color": {
          "value": "#ffffff",
        },
        "links": {
          "color": "#ffffff",
          "distance": 150,
          "enable": true,
          "opacity": 0.5,
          "width": 1,
        },
        "move": {
          "direction": "none",
          "enable": true,
          "outModes": {
            "default": "bounce",
          },
          "random": false,
          "speed": 6,
          "straight": false,
        },
        "number": {
          "density": {
            "enable": true,
          },
          "value": 80,
        },
        "opacity": {
          "value": 0.5,
        },
        "shape": {
          "type": "circle",
        },
        "size": {
          "value": { "min": 1, "max": 5 },
        },
      },
      "detectRetina": true,
    }))
    return(
      <section className="home" id="home">
        <Particles id="particles" options={options} init={particlesLoaded}/>
        <div className="home__text-wrapper">
          <h1>
            Hello, I am Ellie
            <br />A Full Stack Developer.
          </h1>
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateY(600px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="contact-wrapper">
              <div className="contact-wrapper__button-wrapper">
                {/* <button>Email Me</button> */}
                <a href="https://drive.google.com/file/d/1SqRmR-2eXA1_tH23ghHqET0AqeBxebW5/view?usp=drive_link">Download My Resume</a>
              </div>
              <div className="contact-wrapper__social-wrapper">
                <a href="https://www.linkedin.com/in/elliesolhjou">{<FaLinkedin size={40} />}</a>
                <a href="https://github.com/elliesolhjou">{<FaGithub size={40} />}</a>
                <a href="mailto:elliesolhjou@gmail.com">{<SiGmail size={40} />}</a>
                <a href="https://t.me/Ellliiiie">{<FaTelegram  size={40} />}</a>
              </div>
            </div>
          </Animate>
        </div>
      </section>    
  );
};

export default Home;
