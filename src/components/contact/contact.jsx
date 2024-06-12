
import React, { useRef, useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaGlobeAfrica, } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2j0h6xw', 'template_npogror', form.current, {
                publicKey: 'OGoXfX7ReDVuC6N-m',
            })
            .then(
                () => {
                    alert('Your Request Was Successfully Sent!');
                },
                (error) => {
                    alert('Sorry Your Message Was Not Sent? Try Again!', error.text);
                },
                e.target.reset()
            );
    };


    return (
        <section className='contact section'>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className='contact-title padd-15'>Have You Any Questions ?</h3>
                <h4 className='contact-sub-title padd-15'>I`M AT YOUR SERVICES</h4>
                <div className="row">
                    {/* ===============conact info item start========================= */}
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-phone'><FaPhone /></i></div>
                        <h4>Call Us On</h4>
                        <p>+250780925937</p>
                    </div>
                    {/* ===============conact info item end========================= */}
                    {/* ===============conact info item start========================= */}
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-phone'><FaWhatsapp /></i></div>
                        <h4>Whatsapp</h4>
                        <p>+250780925937</p>
                    </div>
                    {/* ===============conact info item end========================= */}
                    {/* ===============conact info item start========================= */}
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-phone'><FaEnvelope /></i></div>
                        <h4>E-mail</h4>
                        <p>benjaminsiradj@gmail.com</p>
                    </div>
                    {/* ===============conact info item end========================= */}
                    {/* ===============conact info item start========================= */}
                    <div className='contact-info-item padd-15'>
                        <div className='icon'><i className='fa fa-phone'><FaGlobeAfrica /></i></div>
                        <h4>Website</h4>
                        <p><a href="https://benjamin.kesug.com/?i=1" target="blank">benjamin.kesug.com</a></p>
                    </div>
                    {/* ===============conact info item end========================= */}
                </div>
                <h3 className='contact-title padd-15'>SEND ME AN E-MAIL</h3>
                <h4 className='contact-sub-title padd-15'>I`M VERY RESPOSIVE TO MESSAGES</h4>
                <div className="row">
                    <form ref={form} onSubmit={sendEmail} className='formula'>
                        <div className='contact-form padd-15'>
                            <div className="row">
                                <div className='form-item col-6 padd-15'>
                                    <div className="form-group">
                                        <input type="text" name='user_name' placeholder='Name' className='form-control' required />
                                    </div>
                                </div>
                                <div className='form-item col-6 padd-15'>
                                    <div className='form-group'>
                                        <input type="email" className='form-control' name="user_email" placeholder='Email' required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='form-item col-12 padd-15'>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' name='subject' placeholder='Subject' required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='form-item col-12 padd-15'>
                                    <div className='form-group'>
                                        <textarea name="message" className='form-control' placeholder='Message' required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='form-item col-12 padd-15'>
                                    <input type="submit" value='Send Message' className='btn' style={{ cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
