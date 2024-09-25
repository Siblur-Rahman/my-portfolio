import './About.css'
import image from '../../assets/developer_siblu.png'
const About = () => {
    return (
        <div className='aboutSection'>
            <div className="aboutLeft">
                <div className="img">
                <img src={image} alt="aboutImage" className='aboutImage'/>
                </div>
            </div>
            <div className="aboutRight">
                <div className="headingAbout">
                    <h1>About</h1>
                </div>
                <div className='aboutDescription'>
                    <h1>Fontend Web Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem quibusdam ab natus asperiores, consectetur aut vitae tempora nulla molestias, officia adipisci distinctio eos in perferendis amet cumque dignissimos explicabo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maiores et error fugit fuga! Magni earum provident, quos, praesentium nihil debitis consequuntur beatae, eligendi necessitatibus delectus nostrum modi pariatur ipsam!</p>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default About;