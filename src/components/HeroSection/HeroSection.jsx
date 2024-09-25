import "./HeroSection.css"
import image from "../../assets/developer_siblu.png"
const HeroSection = () => {
    return (
        <div className="heroSection">
            <div className="left">
                <div className="para1">
                    <p>web developer,</p>
                </div>
                <div>
                    <h1>I'm MD <span>SIBLUR</span> RAHMAN</h1>
                </div>
                <div className="stack">
                    <h1>Fontent Developer</h1>
                </div>
                <div className="para2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore, eius praesentium dolore est optio nostrum rerum fugiat quasi placeat nulla ab veniam tempora, id minima at voluptatum nam deserunt.</p>
                </div>
            </div>
            <div className="right">
                    <img src={image} alt="" className="myImage" />
            </div>
        </div>
    );
};

export default HeroSection;