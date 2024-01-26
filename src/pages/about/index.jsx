import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
// import personalData from "./about.js";
// import {DiApple} from 'react-icons/di'
import { FaDev, FaAws, FaFigma, FaNodeJs, FaPython, FaCss3 } from "react-icons/fa";
import {Animate} from 'react-simple-animate'
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
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: 'translateX(-800px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
                >
                    {/* <h3 className="developerContent">Full Stack Developer</h3> */}
                    <p>Greetings! I'm currently on an exhilarating path towards becoming a software engineer, fueled by my passion for creative problem-solving. My background in project management, where I played a crucial role in overseeing construction projects valued at over $200 million, revealed my keen attention to detail. Working closely with diverse IT and software engineering teams on innovative smart building projects during this time sparked my curiosity and enthusiasm for software engineering, and I was instantly captivated. In my recent bootcamp journey, I delved into programming languages such as HTML, CSS, JavaScript, and Python. However, it's not just about the code! I've also been honing essential soft skills like meticulous attention to detail, effective communication, and being a valuable team player. I firmly believe that cultivating these qualities is pivotal for thriving in the dynamic field of software engineering. I'm super excited about the exciting journey that lies ahead! 🚀</p>
                </Animate>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: 'translateX(500px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
                >
                    {/* <h3 className="personalContent"> Personal Information </h3>
                    <ul>
                        {personalData.map((item, key) => (
                        <li key={key}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                        </li>
                        ))}
                    </ul> */}
                </Animate>
            </div>
            <div className="about__content__serviceWrapper">
                <div className="about__content__serviceWrapper__innerContent">
                    <div>
                    <TbApi size={60} color="var(--selected-theme-main-color)" />
                    </div>
                    <div>
                    <FaDatabase size={60} color="var(--selected-theme-main-color)" />
                    </div>
                    <div>
                    <FaPython size={60} color="var(--selected-theme-main-color)" />
                    </div>
                    <div>
                    <FaNodeJs size={60} color="var(--selected-theme-main-color)" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;
