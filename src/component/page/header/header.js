import styled from "styled-components";
import React from "react";

const Wrapper=styled.div`
    display : flex;
    background :black;
    width:100%;
    color:white;
    padding-left:20px;
`;

function header () {
    return (
        <Wrapper>
            ReactBlog
        </Wrapper>
        
    );
}
export default header;