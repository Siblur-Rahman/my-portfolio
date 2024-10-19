import "./HeroSection.css"
import image from "../../assets/developer_siblu.png"
const HeroSection = () => {
    return (
        <div className="md:flex pt-20 md:h-[640px]">
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
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore, eius praesentium dolore est optio nostrum rerum fugiat quasi placeat nulla ab veniam tempora, id minima at voluptatum nam deserunt.</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                    <img src={image} alt="" className="w-3/4 m-auto" />
            </div>
        </div>
    );
};

export default HeroSection;