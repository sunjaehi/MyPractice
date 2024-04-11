import styled from "styled-components";
import React from "react";

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    margin-top:auto;
`;
function footer () {
    return (
        <Wrapper>
            이용안내
        </Wrapper>
    );
}
export default footer;