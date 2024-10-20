import Heading from '../Heading/Heading';
import Project from './Project';


const Projects = () => {
    return (
        <div className="projectsSection py-10 bg-black">
            <Heading Heading={'My Projects'}/>
            <div className="lg:flex w-full md:justify-evenly mt-20 sm:m-auto">
                <Project project={'Blogs Web Site'} 
                live_link={'https://blog-website-cd1ba.web.app/'}
                clintSite={'https://github.com/Siblur-Rahman/blog-website-client'}
                serverSite={'https://github.com/Siblur-Rahman/blog-website-server'}
                />
                <Project project={'Tourism Management'} 
                live_link={'https://tourism-management-websi-ff6bf.web.app/'}
                clintSite={'https://github.com/Siblur-Rahman/Tourism-Management-client-side'}
                serverSite={'https://github.com/Siblur-Rahman/Tourism-Management-server-side'}
                />
                <Project project={'ContestHUB'}
                live_link={'https://contesthub-bee04.web.app/'}
                clintSite={'https://github.com/Siblur-Rahman/ContestHub-client.git'}
                serverSite={'https://github.com/Siblur-Rahman/ContestHub-server.git'}
                />
            </div>
        </div>
    );
};

export default Projects;