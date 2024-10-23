import './Contact.css'
import Heading from '../Heading/Heading'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_73cr4ni', 'template_pcjo209', form.current, {
          publicKey: 'v4N3bjVhLDJkW2SBz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div className='contactSection bg-black'>
            <Heading Heading={'Contact Me'}/>
            <div className="contactDescription">
                <h3>Please fill out form below to descuss any opportunities</h3>
            </div>
            <form action="" className='form' ref={form} onSubmit={sendEmail}>
                <input placeholder="Your Name" name="user_name" className='inputName input' rows="5" cols="50"/>
                <br />
                <input placeholder="Your Email" name="user_email" className='input' type='email'/>
                <textarea placeholder='Your Message' name="message" className='textarea'/>
                <div className='submit'>
                    <button type='submit' className='submitBtn'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;