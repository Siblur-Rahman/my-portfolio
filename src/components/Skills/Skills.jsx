import { FaCss3Alt, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import SkilsItem from './SkilsItem';
import Heading from '../Heading/Heading';
import { SiExpress } from 'react-icons/si';
const Skills = () => {
    return (
        <div className="skillsSection pt-10 bg-black">

            <Heading Heading={'My Skills'}/>

           <div className="mt-20 grid lg:grid-cols-3 grid-cols-2 lg:gap-2 justify-items-center">
                        

                        <SkilsItem skil={<FaHtml5 className='text-[80px] text-[black]'/>}/>

                        <SkilsItem skil={<FaCss3Alt className='text-[80px] text-[#01d1f7]'/>}/>
                        
                        <SkilsItem skil={<IoLogoJavascript className='text-[80px] text-[blue]'/>}/>

                        <SkilsItem skil={<FaReact className='text-[80px] text-[#01d1f7]'/>}/>

                        <SkilsItem skil={<FaNode className='text-[80px] text-[#01d1f7]'/>}/>

                        <SkilsItem skil={<SiExpress className='text-[80px] text-[#01d1f7]'/>}/>
                        

           </div>
        </div>
    );
};

export default Skills;