import styled from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Notice from "../notice/Notice";

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
            <Link to="/notice">ReactBlog</Link>
            <BrowserRouter>
            <Routes>
                <Route path="/notice" element={<Notice />} />
            </Routes>
            </BrowserRouter>
        </Wrapper>
        
    );
}
export default Header;