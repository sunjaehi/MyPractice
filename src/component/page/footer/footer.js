import styled from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Notice from "../notice/Notice";

const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    padding:10px;
    margin-top:auto;
    justify-content:flex-start;
    
`;
const Content=styled.span`
    font-size:15px;
    align-content:space-between;
`;
function Footer () {
    return (
        <>
        <Link to="/notice">Notice</Link>
        <BrowserRouter>
            <Routes.>
                <Route path="/notice" element={<Notice />} />
            </Routes>
        </BrowserRouter>
         
        </>
    );
}
export default Footer;