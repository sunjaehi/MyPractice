import { useState } from 'react';
import styled from "styled-components";

const Button=styled.button`
  display:flex;
  justify-content:flex-start;
  text-align:center;
  color:black;
  background-color:lightgrey;
  margin:10px;
  margin-right:5px;
  border-radius:5px;
  flex-direction:row;
`;

function Main () {
    let post = '블로그 글 제목';
    let [글제목,글제목변경] = useState(['남자 코트 추천','여자 코트 추천','봄 아우터 추천']);
    let [좋아요,좋아요변경] = useState(0);

    return (
        <>
            <div className="App">
            <div className="list">
            <h4>{글제목[0]} <span onClick={() => {좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
            <p>2월 17일 발행</p>
            </div>
            <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 19일 발행</p>
            </div>
            <div className="list">
            <h4>{글제목[2]}</h4>
            <p>2월 20일 발행</p>
            </div>
            <Button onClick={()=> {
            let copy = [...글제목];
            copy[0]='여자 코트 추천';
            글제목변경(copy);
            }}>글수정</Button> 
            <Button>목록</Button>
            </div>
        </>

    );
}
export default Main;