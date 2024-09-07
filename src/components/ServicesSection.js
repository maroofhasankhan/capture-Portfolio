import React from "react";

//import images
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
//import styles
import { useScroll } from "./useScroll";
import { scrollReveal } from "../pages/animation";


import {About, Description, Image,Hide} from '../pages/styles';
import styled from "styled-components";

const ServicesSection =()=>{
    const [element,controls] =useScroll(); 
    return (
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <h2>
            High <span>quality </span> services
          </h2>
          <Cards>
            {/* <!-- card --> */}
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficent</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* <!-- card --> */}
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Team Work</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* <!-- card --> */}
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphram</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* <!-- card --> */}
            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="" />
        </Image>
      </Services>
    );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: black;
      background-color: white;
      padding: 0.8em;
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;