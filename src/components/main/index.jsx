import { Routes, Route } from "react-router-dom";
import About from "../../pages/about";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import Skills from "../../pages/skills"
// import Contact from "../../pages/contact"


export default function Main() {
  return (
    <div className="Main__main_content-wrapper">
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />}/>
        {/* <Route path="/contact" element={<Contact />}/> */}
      </Routes>
    </div>
  );
}
