import PageHeaderContent from '../../components/pageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'



const About = () =>{
    return(
<section className="about" id="about">
    <PageHeaderContent 
    headerText ='About Me'
    icon ={ <BsInfoCircleFill size={50}/> }
    />

</section>
    )
}

export default About