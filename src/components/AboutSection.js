import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../pages/styles";
//animation
import { motion, stagger } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have . We
          have professionals with amazing skills.
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
      
    </About>
  );
};

//styled componenet

export default AboutSection;
