import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Notice from "./Notice";

const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    padding:10px;
    justify-content:flex-start;
    background-color:grey;
    position:fixed;
    left:0;
    bottom:0;
    right:0;
`;
const Liink=styled(Link)`
    margin:5px;
    margin-right:10px;
    cursor:pointer;
    text-decoration:none;
    color: inherit;
`;
function Footer () {
    return (
        <Wrapper>
            <Liink to="/">홈</Liink>
            <Liink to="Notice">공지사항</Liink>
            <Liink to="Board">이용안내</Liink>
        </Wrapper>
    );
}
export default Footer;