import "./Navbar.css"
import { Link } from 'react-scroll';
const Navbar = () => {
    const link =
    <>
                <li><Link activeClass="myActive" to="heroSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Home</Link></li>
                <li><Link activeClass="myActive" to="aboutSection" spy={true} smooth={true} offset={-100} duration={500} className="list">About</Link></li>
                <li><Link activeClass="myActive" to="skillsSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Skills</Link></li>
                <li><Link activeClass="myActive" to="projectsSection" spy={true} smooth={true} offset={-100} duration={500} className="list">Projects</Link></li>
    </>
    return (
<div className="Navbar navbar bg-black fixed top-0">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black">
            {link}
        </ul>
        </div>
        <a className="btn btn-ghost text-xl">MD. <span className="text-[aqua]">SIBLUR</span> RAHMAN</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       {link}
        </ul>
    </div>
    <div className="navbar-end">
    <Link activeClass="myActive" to="contactSection" spy={true} smooth={true} offset={-100} duration={500} className="navBtn">Contact Me</Link>

    </div>
</div>
    );
};

export default Navbar;