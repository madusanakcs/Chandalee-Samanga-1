/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    // The useRef and sendEmail function are no longer strictly needed
    // without the form, but are left for completeness if the user
    // keeps the contact.js file structure.
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q56kp0r', 'template_at28qt7', form.current, {
            publicKey: '0ahbnGUhbvRz1yLXL',
        })
        .then((result) => {
            console.log('Email sent successfully!', result.text);
            alert('Message Sent Successfully!');
        }, (error) => {
            console.log('Email failed to send:', error.text);
            alert('Message Failed to Send. Please check console for details.');
        });
        
        e.target.reset();
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch <span className='emoji'>📩</span></h2>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me <i className="uil uil-calling"></i></h3>

                <div className="contact__info">

                    {/* Updated with Chandalee's Email */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">chandaleesamanga2001@gmail.com</span>

                        <a href="mailto:chandaleesamanga2001@gmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    {/* Updated with Chandalee's Phone/WhatsApp */}
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">0701995093</span>

                        {/* Formatting the phone number for an international WhatsApp link (using +94 for Sri Lanka, removing the leading 0) */}
                        <a href="https://api.whatsapp.com/send?phone=94701995093&text=Hello, I would like to connect with you!" className="contact__button" target="_blank" rel="noopener noreferrer">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            {/* THE ENTIRE CONTACT FORM SECTION WAS REMOVED HERE */}
            
        </div>
    </section>
  )
}

export default Contact