import styled from "styled-components";
import React from "react";
import { StaticMap } from "react-kakao-maps-sdk";
//import { Link } from "react-router-dom";

/*
const Wrapper=styled.div`
    display:flex;
`;
*/

function Notice () {
    return (
        <StaticMap
            center={{
                lat:33.450701,
                lng:126.570667
            }}
            style={{
                width:"500px",
                height:"500px",
                margin:"10px"
            }}
            marker={{
                lat:37.5029087190,
                lng:127.0377563750
            }}
            level={3}
            />

    );
}
export default Notice; 