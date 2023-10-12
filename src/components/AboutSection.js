import React from "react"; 
import home1 from '../img/home1.png';

//FRAMER MOTION //
import {motion} from 'framer-motion';
import { fade, photoAnima, titleAnim, container } from "../animation";
import { About, Description, DImage, Hide } from "../styles";
import Wave from "./Wave";

const AboutSection = () => {

    return(
        <About>
        <Description>
            <motion.div variants={container} initial='hidden' animate='show' 
            className="title">
                <Hide>
                    <motion.h2 variants={titleAnim} >
                        We work to make</motion.h2>
                </Hide>
                <Hide>
                <motion.h2 variants={titleAnim} >Your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                <motion.h2 variants={titleAnim}>true.</motion.h2>
                </Hide>
            </motion.div>
            <motion.p
            variants={fade}
            >Contact us for any photography or videography ideas that you have. We have profesionals with amazing skills.</motion.p>
            <motion.button 
            variants={fade} 
            >Contact Us</motion.button>
        </Description>
        <DImage>
            <motion.img 
            variants={photoAnima}  src={home1} alt="guy with a camera" />
        </DImage>
        <Wave />
        </About>
    )
}

export default AboutSection;