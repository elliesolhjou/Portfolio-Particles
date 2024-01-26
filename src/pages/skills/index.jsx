import PageHeaderContent from "../../components/pageHeader";
import { useState, useEffect } from "react";
import { GiSkills } from "react-icons/gi"
import "./style.scss";

function Skills() {
  const [skills, setSkills] = useState([]);

  async function getSkills() {
    const response = await fetch("/skills.json");
    const data = await response.json();
    setSkills(data);
  }

  useEffect(() => {
    getSkills();
  }, []);

  const loaded = () => {
    return (
      <section className="skills" id="skills">
        <PageHeaderContent headerText={'Skills'} icon={<GiSkills size={50}/>}/>
        <div className="skills__content">
          <div className="skills__content__card">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="skills__content__card__item"
                style={{ flex: "1 0 0" }}
              >
                {/* <p className="skills__content__card__item__p">{skill.name}</p> */}
                <img
                  className="skills__content__card__item__img"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return skills.length > 0 ? loaded() : <h1>Loading...</h1>;
}

export default Skills;
