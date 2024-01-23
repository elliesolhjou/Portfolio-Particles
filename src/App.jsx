import { useEffect, useMemo, useState, useLocation } from "react"
import Particles, { initParticlesEngine }  from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.scss";

function App() {
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

  return (
    <div className="App">
      <Particles id="particles" options={options} init={particlesLoaded}/>
      <div className="App__header_Wrapper">
        <Header />
      </div>
      <div className="App__main_Wrapper">
        <Main />
      </div>
      <div className="App__footer_Wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;