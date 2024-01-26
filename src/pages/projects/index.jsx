import { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import "./style.scss";

const Projects = () => {
  const [filterValue, setFilterValue] = useState(1);

  const handleFilter = (id) => {
    setFilterValue(id);
  };
  console.log(filterValue);
  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <div>
      <section className="portfolio" id="portfolio">
        <PageHeaderContent
          headerText={"Portfolio"}
          icon={<AiFillProject size={50} />}
        />
        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleFilter(option.id)}
                className={option.id === filterValue ? "active" : ""}
              >
                {option.label}
              </li>
            ))}
          </ul>
          <div className="portfolio_content__cards">
            {filteredPortfolioData.map((item, key) => (
              <div key={key} className="portfolio__content__cards__item">
                <div className="portfolio__content__cards__item__img-wrapper">
                  <img
                    className="portfolio__content__cards__item__img"
                    src={item.image}
                    alt={item.projectName}
                  />
                  <div className="overlay">
                    <div className="projectName">
                      <p>{item.projectName}</p>
                      <button className="button">
                        <a href={item.projectLink}>Live App</a>
                      </button>
                      {item.sectionId === 2 ? (
                        <button className="button">
                          <a href={item.projectGithub}>GitHub</a>
                        </button>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

//

//             <div className="portfolio_content__cards">
//                 {filteredPortfolioData.map((item, key) => (
//                 <div
//                 onMouseEnter={()=>setHoveredIndex(key)} onMouseLeave={()=>setHoveredIndex(null)}
//                     key={key}
//                     className="portfolio_content__cards__item"
//                 >
//                     <div className="portfolio_content__cards__item__img-wrapper">
//                     <a>
//                         <img src={item.image} alt={item.projectName} />
//                     </a>
//                     </div>
//                     <div className="overlay">
//                         {/* { */}
//                         {/* // hoveredIndex === key &&( */}
//                             <div className="projectName">
//                                 <p>{item.projectName}</p>
//                                 <button className='button'>Visit</button>
//                         </div>
//                         {/* )} */}
//                     </div>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </section>
//         </div>
//     );
// };

export default Projects;
