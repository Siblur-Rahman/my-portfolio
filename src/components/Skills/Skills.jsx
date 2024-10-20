import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import SkilsItem from './SkilsItem';
import Heading from '../Heading/Heading';
const Skills = () => {
    return (
        <div className="skillsSection pt-10">

            <Heading Heading={'My Skills'}/>

           <div className="mt-20 grid lg:grid-cols-4 grid-cols-2 lg:gap-5 justify-items-center">
                        
                                <SkilsItem skil={<FaReact className='text-[80px] text-[#01d1f7]'/>}/>

                                <SkilsItem skil={<FaHtml5 className='text-[80px] text-[black]'/>}/>

                                <SkilsItem skil={<FaCss3Alt className='text-[80px] text-[#01d1f7]'/>}/>
                                
                                <SkilsItem skil={<IoLogoJavascript className='text-[80px] text-[blue]'/>}/>

           </div>
        </div>
    );
};

export default Skills;