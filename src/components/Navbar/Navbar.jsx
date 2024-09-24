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
                <Link className="list">Home</Link>
                <Link className="list">About</Link>
                <Link className="list">Skills</Link>
                <Link className="list">Projects</Link>
            </div>
            <div className="btnNav">
                <button className="btn">Contact Me</button>
            </div>
        </div>
    );
};

export default Navbar;