import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
        <StyledNav>
            <h2><Link to="/">Capture</Link></h2>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
        
        </>
    )
}

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
    color: white;
    text-decoration: none;
}
ul {
    display: flex;
    list-style: none;
}
h2{
    font-family: "Lobster", cursive;
    font-size: 1.8rem;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;
}
`

export default Nav;