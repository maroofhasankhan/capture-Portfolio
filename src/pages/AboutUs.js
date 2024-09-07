import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import GlobalStyle  from "../components/GlobalStyle";
//animation 
import { pageAnimation } from "../pages/animation";
import { motion } from "framer-motion";

const AboutUs =( ) =>{
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GlobalStyle />
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    );
}
export default AboutUs;

