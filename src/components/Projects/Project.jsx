
import { FaGithub } from 'react-icons/fa6';
const Project = ({project, live_link, clintSite, serverSite}) => {
    return (
        <div className="lg:h-[320px] lg:w-1/4 sm:h-[400px] sm:w-[500px] sm:m-auto sm:my-10 bg-white border-white border-2 rounded-3xl text-black text-center">
            <div className='my-5'>{project}</div>
            <div className='flex gap-2 mt-2'>
            <div><a href={live_link} target="_blank" className='border-2 p-2'>Live Link</a></div>
            <div><a href={clintSite} target="_blank" className='border-2 p-2'>ClintSite</a></div>
            <div><a href={serverSite} target="_blank" className='border-2 p-2'>ServerSite</a></div>
            </div>
        </div>
    );
};

export default Project;