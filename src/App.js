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
import Search from './component/Search';
import Marker from './component/Marker';
//import Geolocation from '//component/Geolocation';
import Geo from './component/Geo';
import Mark from './component/Mark';
import Geolocation from './component/Geolocation';

function App() {
  
  return (
    <>
      <Kakao />
      
    </>
  );
}

export default App;
