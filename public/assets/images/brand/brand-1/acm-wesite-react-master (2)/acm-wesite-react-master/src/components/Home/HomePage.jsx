import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

import CategoriesSection from './CategoriesSection';

import Footer from './Footer';
import FunfactAndFaqSection from './FunFactAndFaqSection';
import TestimonialSection from './TestimonialSection';
import UpcomingEvents from './UpcomingEvents';
import { ContactSection, TeamSection } from './ContactandTeamSection';
import Preloader from './Preloader';
import MagicCursor from './MagicCursor';
import BackToTop from './BacktoTop';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';

const HomePage = () => (
  <div className="ep-magic-cursor">
      <Preloader/>
     <MagicCursor/>
     <BackToTop/>
      <MobileMenu/>
    
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
      
        <HeroSection />
        <AboutSection />
        <CategoriesSection/>
       <ContactSection/>
<TeamSection/>
        <FunfactAndFaqSection/>
  <TestimonialSection/> 
  <UpcomingEvents/> 
        <Footer/>
      </main>
    </div>
  </div>
  </div>
);

export default HomePage;