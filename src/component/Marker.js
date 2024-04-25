import React, { useEffect } from "react";
import { sample } from "../data/sample";
import '../App.css';
const {kakao} = window;

function Marker() {
    useEffect(() => {
        mapscript();
    },[]);
    const mapscript = () => {
        let mapContainer=document.getElementById('map'),
            mapOption = {
                center : new kakao.maps.LatLng(37.5029087190,127.0377563750),
                level:3
            };
        
        const map=new kakao.maps.Map(mapContainer,mapOption);
        const imageSrc="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        /*
        for (var i=0; i<sample.length; i++) {
            const imageSize=new kakao.maps.Size(24,35);
            const markerImage=new kakao.maps.MarkerImage(imageSrc,imageSize);
            new kakao.maps.Marker({
                map:map,
                position:sample[i].latlng,
                name:sample[i].name,
                image:markerImage
            });
        }
        */
        
        sample.forEach((ac) => {
            const imageSize=new kakao.maps.Size(24,35);
            const markerImage=new kakao.maps.MarkerImage(imageSrc,imageSize);
            new kakao.maps.Marker({
                map:map,
                position:new kakao.maps.LatLng(ac.longitude, ac.latitude),
                title:ac.name,
                image:markerImage
            });
        });
        
    };
    return <div id="map" style={{width:"300px",height:"300px"}}></div>;
}
export default Marker;
    

