/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '블로그 글 제목';
  let [글제목,글제목변경] = useState(['남자 코트 추천','여자 코트 추천','봄 아우터 추천']);
  let [좋아요,좋아요변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=> {
        let copy = [...글제목];
        copy[0]='여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>      
      
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      
    </div>
  );
}
function Modal() {
  return (
      <div className="modal">
      <h4>제목</h4>      
      <p>날짜</p>
      <p>상세내용</p>
      </div>
  )
}

export default App;
