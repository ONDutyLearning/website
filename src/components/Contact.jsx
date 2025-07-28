import React, { useRef, useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_c22jhos';
const TEMPLATE_ID = 'template_toz7fcl';
const USER_ID = 'Q2r6C38pttO3WGvbr';

const PHONE_NUMBER = "+91 7893194879";
const SUPPORT_EMAIL = "onduty5457@gmail.com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        () => {
          setStatus('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Try again later.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Left: Info */}
        <div className={styles.infoPane}>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><span role="img" aria-label="clock">⏰</span></div>
            <div>
              <span className={styles.infoTitle}>Working Hours</span>
              <div className={styles.infoText}>
                Mon – Fri: 9:00 AM – 6:00 PM<br />
                Sat – Sun: Closed
              </div>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><span role="img" aria-label="phone">📞</span></div>
            <div>
              <span className={styles.infoTitle}>Let's Talk</span>
              <a className={styles.infoLink} href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><span role="img" aria-label="email">✉️</span></div>
            <div>
              <span className={styles.infoTitle}>General Support</span>
              <a className={styles.infoLink} href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles.formPane}>
          <h2 className={styles.formTitle}>Send Us A Message</h2>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.row2}>
              <input
                className={styles.input}
                type="text"
                name="first_name"
                placeholder="First name"
                required
              />
              <input
                className={styles.input}
                type="text"
                name="last_name"
                placeholder="Last name"
                required
              />
            </div>
            <input
              className={styles.input}
              type="email"
              name="user_email"
              placeholder="Eg. example@email.com"
              required
            />
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Eg. +91 7893194879"
              pattern="^\+?[0-9\s\-]+$"
            />
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Write us a message"
              required
              rows={4}
            />
            <button type="submit" className={styles.btn}>SEND MESSAGE</button>
            {status && <div className={styles.status} aria-live="polite">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
