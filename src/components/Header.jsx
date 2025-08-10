import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <img src="./logo.jpg" alt="On Duty Learning Logo" className={styles.logoImg} />

        <button className={styles.menuToggle} onClick={handleToggleMenu}>
          {menuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="#hero" onClick={handleToggleMenu}>Home</a></li>
            <li><a href="#features" onClick={handleToggleMenu}>Features</a></li>
            <li><a href="#about" onClick={handleToggleMenu}>About Us</a></li>
            <li><a href="#internships" onClick={handleToggleMenu}>Internships</a></li>
            <li><a href="#contact" onClick={handleToggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
