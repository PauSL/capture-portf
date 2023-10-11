import React from "react"; 
import home1 from '../img/home1.png';

//Styled //

import styled from "styled-components";
import { About, Description, DImage, Hide } from "../styles";

const AboutSection = () => {
    return(
        <About>
        <Description>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>Your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
            </div>
            <p>Contact us for any photograpgy or videography ideas that you have. We have profesionals with amazing skills.</p>
            <button>Contact Us</button>
        </Description>
        <DImage>
            <img src={home1} alt="guy with a camera" />
        </DImage>
        </About>
    )
}


//Styled components //




export default AboutSection;