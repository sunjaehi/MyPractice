import styled from "styled-components";
import React from "react";

const Wrapper=styled.div`
    display : flex;
    background :black;
    width:100%;
    color:white;
    padding:10px;
    margin:3px;
    font-size:20px;
`;

function Header () {
    return (
        <Wrapper>
            ReactBlog
        </Wrapper>
        
    );
}
export default Header;