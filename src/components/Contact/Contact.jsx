import './Contact.css'
import Heading from '../Heading/Heading'


const Contact = () => {
    return (
        <div className='contactSection'>
            <Heading Heading={'Contact Me'}/>
            <div className="contactDescription">
                <h3>Please fill out form below to descuss any opportunities</h3>
            </div>
            <form action="" className='form'>
                <input placeholder="Your Name" className='inputName input' rows="5" cols="50"/>
                <br />
                <input placeholder="Your Email" className='input' type='email'/>
                <textarea placeholder='Your Message' className='textarea'/>
                <div className='submit'>
                    <button type='submit' className='submitBtn'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;