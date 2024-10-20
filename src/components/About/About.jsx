import Heading from "../Heading/Heading";

const About = () => {
    return (
            <div className="aboutSection border-2 pt-10 w-full">
                <Heading Heading={'About Me'}/>
                <div className='text-center'>
                    <div className="w-[600px] m-auto">
                    <h2 className='text-gray-400 text-2xl hover:text-white'>Fontend Web Developer</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem quibusdam ab natus asperiores, consectetur aut vitae tempora nulla molestias, officia adipisci distinctio eos in perferendis amet cumque dignissimos explicabo!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maiores et error fugit fuga! Magni earum provident, quos, praesentium nihil debitis consequuntur beatae, eligendi necessitatibus delectus nostrum modi pariatur ipsam!
                    <button>Download CV</button>
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