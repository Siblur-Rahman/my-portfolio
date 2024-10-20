import image from "../../assets/developer_siblu.png"
const HeroSection = () => {
    return (
        <div className="heroSection md:flex pt-20 bg-black">
            <div className="md:w-1/2 px-5 md:pt-40">
                <div className="">
                    <div className="">
                        <p>web developer,</p>
                    </div>
                    <div>
                        <h1 className="text-2xl ">I'm MD <span className="text-[aqua]">SIBLUR</span> RAHMAN</h1>
                    </div>
                    <div className="">
                        <h1 className="text-2xl">Fontent Developer</h1>
                        <p>Building responsive and modern web experiences.</p>
                    </div>
                    <div className="">
                        <p>I specialize in creating dynamic, user-friendly websites using the latest web technologies. Whether it's front-end design or back-end development, I love bringing ideas to life through clean, efficient code. Let’s build something great together!.</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                    <img src={image} alt="" className="w-3/4 m-auto pb-8 h-full" />
            </div>
        </div>
    );
};

export default HeroSection;