import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import './style.scss'


export default function test() {
    return (
      <footer className=" footer flex flex-col text-black px-4 py-2 items-center justify-center rounded dark:bg-none dark:text-white font-mono">
        <div className="contact-wrapper">
          <div className="contact-wrapper__social-wrapper">
            <a href="https://www.linkedin.com/in/elliesolhjou">{<FaLinkedin size={40} />}</a>
            <a href="https://github.com/elliesolhjou">{<FaGithub size={40} />}</a>
            <a href="mailto:elliesolhjou@gmail.com">{<SiGmail size={40} />}</a>
            <a href="https://t.me/Ellliiiie">{<FaTelegram  size={40} />}</a>
          </div>
        </div>
        <div className="contact-wrapper__text">
        <p>Powered By React.JS and DALL.E</p>
  
        </div>
      </footer>
    );
  }
  
  
