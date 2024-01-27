import "./style.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Animate } from "react-simple-animate";
import { useEffect, useMemo, useState } from "react";
import Particles  from "@tsparticles/react";
import { loadFull } from "tsparticles";


const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      try {
        const engine = await loadFull(tsParticles);
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };
    initParticles();
  }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "#1d1d1d",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }));
  return (
    <section className="home" id="home">
      {init && (
        <Particles id="particles" options={particlesOptions} />
      )}
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
            transform: "translateY(700px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <div className="contact-wrapper">
            <div className="contact-wrapper__button-wrapper">
              <a href="https://docs.google.com/document/d/1JEg8J3viiuRVwQFo0kKDJDiCgbEimbfMv-a-yS4gD5Q/edit">
                Download My Resume
              </a>
            </div>
            <div className="contact-wrapper__social-wrapper">
              <a href="https://www.linkedin.com/in/elliesolhjou">
                {<FaLinkedin size={40} />}
              </a>
              <a href="https://github.com/elliesolhjou">
                {<FaGithub size={40} />}
              </a>
              <a href="mailto:elliesolhjou@gmail.com">
                {<SiGmail size={40} />}
              </a>
              <a href="https://t.me/Ellliiiie">{<FaTelegram size={40} />}</a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
