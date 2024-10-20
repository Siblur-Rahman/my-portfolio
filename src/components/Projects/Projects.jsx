import Heading from '../Heading/Heading';
import Project from './Project';


const Projects = () => {
    return (
        <div className="projectsSection py-10 bg-red-600">
            <Heading Heading={'My Projects'}/>
            <div className="md:flex w-full md:justify-evenly mt-20 sm:m-auto">
                <Project project={'Blogs Web Site'}/>
                <Project project={'Tourism Management'}/>
                <Project project={'ContestHUB'}/>
            </div>
        </div>
    );
};

export default Projects;