import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className="container">
      <h2>Empowering Learning, On Duty</h2>
      <p>Unlock your potential with innovative online learning experiences, internships, and skill development programs.</p>
      <a href="#internships" className={styles.btn}>Explore Internships</a>
    </div>
  </section>
);

export default Hero;