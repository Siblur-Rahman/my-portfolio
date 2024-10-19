import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import './Skills.css'
import { IoLogoJavascript } from 'react-icons/io';
import SkilsItem from './SkilsItem';
const Skills = () => {
    return (
        <div className="skillsSection">
            <div className='headingSection'>
                <h1>My Skills</h1>
            </div>
           <div className="mt-20 grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 justify-items-center">
                        
                                <SkilsItem skil={<FaReact className='text-[80px] text-[#01d1f7]'/>}/>

                                <SkilsItem skil={<FaHtml5 className='text-[80px] text-[black]'/>}/>

                                <SkilsItem skil={<FaCss3Alt className='text-[80px] text-[#01d1f7]'/>}/>
                                
                                <SkilsItem skil={<IoLogoJavascript className='text-[80px] text-[blue]'/>}/>

           </div>
        </div>
    );
};

export default Skills;