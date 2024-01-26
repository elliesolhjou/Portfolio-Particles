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
                    
                    <p>As a budding software engineer with a deep-rooted passion for problem-solving, I have successfully transitioned from a career in project management, where I oversaw construction projects valued at over $200 million, to the dynamic world of tech. My experience in managing large-scale, detail-intensive projects and collaborating with IT and software engineering teams on cutting-edge smart building initiatives ignited my interest in software development.

Having recently completed an intensive boot camp, I have rigorously developed my technical proficiency in programming languages such as JavaScript, Python, HTML, and CSS. This hands-on experience has been instrumental in deepening my understanding of software development and its practical applications.

My journey in software engineering is not just about technical growth but also about nurturing vital soft skills. My strong background in project management has honed my attention to detail, effective communication, and teamwork abilities – skills I consider crucial for success in software engineering.

I am now eagerly looking forward to applying my combined expertise in project management and newly acquired technical skills in a software engineering role, aiming to contribute to innovative solutions and drive technological advancement.👨‍💻🚀</p>
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
