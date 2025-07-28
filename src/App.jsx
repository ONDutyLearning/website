import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <>
      <Header />
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection delay={0.2}><Features /></FadeInSection>
      <FadeInSection delay={0.2}><About /></FadeInSection>
      <FadeInSection delay={0.2}><Internships /></FadeInSection>
      <FadeInSection delay={0.2}><Contact /></FadeInSection>
      <Footer />
    </>
  );
}

export default App;