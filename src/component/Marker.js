import React, { useEffect } from "react";
import { sample } from "../data/sample";
import KaKao from "./Kakao";
const {kakao} = window;

function Marker() {
    useEffect(() => {
        mapscript();
    },[]);
    const mapscript = () => {
         let mapContainer=document.getElementById('map'),
            mapOption = {
                center : new kakao.maps.LatLng(37.5029087190,127.0377563750),
                level:5
            };
        
        const map=new kakao.maps.Map(mapContainer,mapOption);
        sample.forEach((ac) => {
            new kakao.maps.Marker({
                map:map,
                position:new kakao.maps.LatLng(ac.longitude, ac.latitude),
                name:ac.name,
            });
        });
    };
    return <div id="map" style={{width:"500px",height:"500px"}}></div>;
}
export default Marker;
    

