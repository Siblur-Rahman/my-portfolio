import Heading from '../Heading/Heading';
import Project from './Project';


const Projects = () => {
    return (
        <div className="projectsSection py-10">
            <Heading Heading={'My Projects'}/>
            <div className="lg:flex w-full md:justify-evenly mt-20 sm:m-auto">
                <Project project={'Blogs Web Site'}/>
                <Project project={'Tourism Management'}/>
                <Project project={'ContestHUB'}/>
            </div>
        </div>
    );
};

export default Projects;