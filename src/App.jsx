import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import particlesConfig from "./helpers/particlesConfig";
console.log(particlesConfig)
console.log(Particles)
import "./App.css";

function App() {
  const particleInit = async (main) => {
    console.log("particleInit called, main:", main);
    try {
      console.log("before loadFull");
      await loadFull(main);
      console.log("after loadFull");
    } catch (error) {
      console.error("Error in particleInit:", error);
    }
  };
  return (
    <div className="App">
      <Particles id="particles" options={particlesConfig} init={particleInit}/>
      <div className="header">
        <Header />
      </div>
      <div className="Main">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;