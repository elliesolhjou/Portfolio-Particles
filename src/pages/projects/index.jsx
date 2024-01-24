import PageHeaderContent from "../../components/pageHeader"
import {AiFillProject} from 'react-icons/ai'
import { filterOptions } from "./utils"

const Projects = () =>{
    return(
        <div>
            <section className="portfolio" id="portfolio">
                <PageHeaderContent headerText={'My Portfolio'} icon={<AiFillProject size={40}/>}/>
                <div className="portfolio__content">
                    <div className="portfolio__content__filter">
                        {
                            filterOptions.map((option)=>(
                                <li key={option.id}>
                                    {option.label}
                                </li>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects