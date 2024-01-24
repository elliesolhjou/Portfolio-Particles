import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import personalData from "./about.js";
// import {DiApple} from 'react-icons/di'
import { FaDev, FaAws, FaFigma, FaNodeJs, FaPython, FaCss3 } from "react-icons/fa";
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={50} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3 className="developerContent">Full Stack Developer</h3>
          <p>Lorem Ipsum</p>
          <h3 className="personalContent"> Personal Information </h3>
          <ul>
            {personalData.map((item, key) => (
              <li key={key}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__serviceWrapper">
          <div className="about__content__serviceWrapper__innerContent">
            <div>
              <FaAws size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaPython size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaNodeJs size={60} color="var(--selected-theme-main-color)" />
            </div>
            {/* <div>
              <FaCss3 size={60} color="var(--selected-theme-main-color)" />
            </div> */}
            {/* <div>
              <FaFigma size={60} color="var(--selected-theme-main-color)" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
