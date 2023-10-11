import React from "react";
import { About } from "../styles";
import styled from "styled-components";

const FaqSection = () => {
    return (
        <>
        <Faq>
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus voluptatum in alias iusto rem impedit rerum quo repellendus maiores inventore totam, obcaecati numquam commodi molestias corrupti eveniet aliquam! Quisquam!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus voluptatum in alias iusto rem impedit rerum quo repellendus maiores inventore totam, obcaecati numquam commodi molestias corrupti eveniet aliquam! Quisquam!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus voluptatum in alias iusto rem impedit rerum quo repellendus maiores inventore totam, obcaecati numquam commodi molestias corrupti eveniet aliquam! Quisquam!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit!.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus voluptatum in alias iusto rem impedit rerum quo repellendus maiores inventore totam, obcaecati numquam commodi molestias corrupti eveniet aliquam! Quisquam!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
        </>
    )
};

const Faq = styled(About)`
display: block;
span {
    display: block;   
}
h2{
   padding-bottom: 2rem;
   font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer {
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`

export default FaqSection