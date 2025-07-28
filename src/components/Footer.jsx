import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <p>&copy; {new Date().getFullYear()} On Duty Learning. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;