import { useEffect } from 'react';
import { Element } from 'react-scroll';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="how-it-works">
        <HowItWorks />
      </Element>
      <Element name="benefits">
        <Benefits />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="contact">
        <CallToAction />
      </Element>
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
