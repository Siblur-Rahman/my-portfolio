import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import './Skills.css'
import { IoLogoJavascript } from 'react-icons/io';
const Skills = () => {
    return (
        <div className="skillsSection">
            <div className='headingSection'>
                <h1>My Skills</h1>
            </div>
           <div className="mySkills">
            <div className='skill'>
                    <FaReact className='react'/>
            </div>
            <div className='skill'>
                    <FaHtml5 className='html'/>
            </div>
            <div className='skill'>
                    <FaCss3Alt className='css'/>
            </div>
            <div className='skill'>
                    <IoLogoJavascript className='js'/> 
            </div>
           </div>
        </div>
    );
};

export default Skills;