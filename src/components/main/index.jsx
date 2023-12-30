import { Routes, Route } from "react-router-dom";
import About from "../../pages/about";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import Resume from "../../pages/resume"
import Skills from "../../pages/skills"
import Contact from "../../pages/contact"

export default function Main() {
  return (
    <div className="Main">
      Main Component Goes here
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}
