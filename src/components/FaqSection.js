import React, { useState } from "react";
import { About } from "../pages/styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../pages/animation";


const FaqSection = () => {

    const [element,controls] = useScroll();
  
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        {/* question */}
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, non!
            </p>
          </div>
        </Toggle>
        {/* question */}
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, non!
            </p>
          </div>
        </Toggle>
        {/* question */}
        <Toggle title="Different payment system">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, non!
            </p>
          </div>
        </Toggle>
        {/* question */}
        <Toggle title="What Product Do you Offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, non!
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

export default FaqSection;

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 3rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
