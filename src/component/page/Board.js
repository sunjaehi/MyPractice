import styled from "styled-components";
import React from "react";

const Wrapper=styled.h4`
    display:flex;
`;
const Second=styled.span`
    display:flex;
`;

function Board () {
    return (
        <div>
            <Wrapper>
                공지사항
            </Wrapper>
            <Second>
                알림
            </Second>
            
        </div>

    );
}
export default Board;