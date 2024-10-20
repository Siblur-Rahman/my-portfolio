import Heading from "../Heading/Heading";

const About = () => {
    return (
            <div className="aboutSection pt-10 w-full bg-black">
                <Heading Heading={'About Me'}/>
                <div className='text-justify'>
                    <div className="w-[600px] m-auto">
                    <h2 className='text-gray-400 text-2xl hover:text-white'>Fontend Web Developer</h2>
                    I'm a passionate junior web developer with a solid foundation in front-end and back-end technologies. I specialize in crafting responsive, user-friendly websites using HTML, CSS, and JavaScript, along with modern frameworks like React. I’m continuously learning new technologies and enhancing my skills in areas like Node.js, Express, and MongoDB for full-stack development.
                    <br /><br />
                    With a focus on clean code, problem-solving, and improving user experiences, I’m excited to work on collaborative projects that bring ideas to life through the web. I’m always eager to take on new challenges and grow as a developer.
                    <br />
                    <button className="my-5 bg-[black] border-2 border-white rounded-lg p-2 hover:text-[aqua]"><a href="https://drive.google.com/drive/folders/11IhhyZTCsmLfEoD6ReV2t-sIkSqOlzIq?usp=drive_link" target="_blank">Download Resume</a></button>
                    </div>
                </div>
                <div className="md:flex justify-between px-10 py-5">
                    <div className="about-item">
                        <p className="item-title">Name</p>
                        <h1 className="text-xl ">MD <span className="text-[aqua]">SIBLUR</span> RAHMAN</h1>
                    </div>
                    <div className="about-item">
                        <p className="item-title">Email</p>
                        <p className="item-description"><span className="text-[aqua]">msrahman048</span>@gmail.com</p>
                    </div>
                    <div className="about-item">
                        <p className="item-title">Date of Birth</p>
                        <p className="item-description"> <span className="text-[aqua]">Dec 29</span>, 1997</p>
                    </div>
                    <div className="about-item">
                        <p className="item-title">From</p>
                        <p className="item-description"><span className="text-[aqua]">Rajshahi</span>, Bangladesh</p>
                    </div>
                </div>
            </div>
    );
};

export default About;