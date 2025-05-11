import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_p1rlaj9",
        "template_ubxfzzg",
        form.current,
        "AynbLDLuC0qlx0_uy"
      ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className='contact main-article'>
      <h1>Contact</h1>
      <hr className='small-horizontal' />

      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label><br />
        <input type="text" name="user_name" required /><br />

        <label>Email</label><br />
        <input type="email" name="user_email" required />
        <br />

        <label>Message</label>
        <textarea name="message" required />
        <br />

        <button className='contact-btn btn-primary' type="submit">Send</button>
      </form>
     
    </div>
  );
};
