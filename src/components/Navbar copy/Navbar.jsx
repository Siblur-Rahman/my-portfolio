import "./Navbar.css"
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="logoh1">
                    MD <span>SIBLUR</span> RAHMAN
                </h1>
            </div>
            <div className="listItems">
                <Link activeClass="active" to="heroSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Home</Link>
                <Link activeClass="active" to="aboutSection" spy={true} smooth={true} offset={-100} duration={500} className="list">About</Link>
                <Link activeClass="active" to="skillsSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Skills</Link>
                <Link activeClass="active" to="projectsSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Projects</Link>
            </div>
            <div className="">
                {/* <button className="navBtn"> */}
                    <Link activeClass="btnActive" to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className="navBtn">Contact Me</Link>
                    {/* </button> */}
            </div>
        </div>
    );
};

export default Navbar;