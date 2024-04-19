/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/page/Footer';
import Header from './component/page/Header';
import Notice from './component/page/Notice';
import Main from './component/page/Main';
import Kakao from './component/Kakao';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <Main />
    <Kakao />
    <Footer />
    </BrowserRouter>
      
    </>
  );
}

export default App;
