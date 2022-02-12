import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/contactform.css';
import Mail from "../asset/mail.png";

const ContactFrom = ({ contact, setContact }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'Gmail portfolio',
        'template_sji7kka',
        e.target,
        'user_eZSd4WVmnBj8ZJw8MJ40s'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={contact ? 'container-all-form' : 'container-close'}>
      <div className="container-form">
        <div className="container-cross">
          <button type="button" onClick={() => setContact(!contact)}>
            ✕
          </button>
          <div className="container-lettre">
          <img src={Mail} alt="mail"/>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <label htmlFor="user_name">
            Nom, Prénom :
            <input type="text" name="name" />
          </label>
          <label htmlFor="user_email">
            Email :
            <input type="email" name="email" />
          </label>
          <label htmlFor="subject">
            Sujet :
            <textarea name="subject" />
          </label>
          <label htmlFor="message">
            Message :
            <textarea name="message" />
          </label>
          <button
            type="submit"
            className="btn-form"
            onClick={() => setContact(!contact)}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
