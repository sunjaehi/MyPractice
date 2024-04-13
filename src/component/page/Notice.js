import styled from "styled-components";
import React from "react";
//import { Link } from "react-router-dom";

const Wrapper=styled.div`
    display:flex;
`;

function Notice () {
    return (
        <Wrapper>
            공지사항
        </Wrapper>
    );
}
export default Notice;