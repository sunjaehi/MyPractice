import styled from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Notice from "./Notice";

const Wrapper=styled.div`
    display : flex;
    background :black;
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