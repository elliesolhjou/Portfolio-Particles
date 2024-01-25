import PageHeaderContent from "../../components/pageHeader";
import { useState, useEffect } from "react";
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
      <>
        <PageHeaderContent headerText={'Skills'} />
        <div className="skills__skillWrapper pt-[50px] w-full" style={{ maxWidth: "1000px" }}>
          <div className="fade-up duration-500">

          </div>
          <div className="skills__skillWrapper__card w-full  grid grid-cols-4 sm:grid-cols-4 gap-6 text-center py-6 fade-up">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="shadow-lg rounded-md shadow-[#160a0b] dark:hover:bg-red-500 hover:scale-110 hover:bg-var(--selected-theme-main-color)-500 duration-500 p-2"
                style={{ flex: "1 0 0" }}
              >
                <p className="text-[1.25vw]">{skill.name}</p>
                <img
                  className="w-[150px] mx-auto pb-2"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return skills.length > 0 ? loaded() : <h1>Loading...</h1>;
}

export default Skills;
