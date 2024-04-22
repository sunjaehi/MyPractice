import React, { useEffect } from "react";
const {kakao} = window;

function Geolocation() {
    useEffect(()=> {
        script()
    },[]);
    const script = () => {
        let mapContainer=document.getElementById('map'),
            mapOption={
                center:new kakao.maps.LatLng(37.5029087190,127.0377563750),
                level:5
            };
        let map=new kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat=position.coords.latitude,
                    lon=position.coords.longitude;
                const locPosition=new kakao.maps.LatLng(lat,lon),
                    message='<div style="padding:5px;">여기에 계신가요?</div>';
                
                displayMarker(locPosition, message);
            });
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
            const locPosition=new kakao.maps.LatLng(37.5029087190,127.0377563750),
                message='geolocation을 사용할 수 없어요..'
            displayMarker(locPosition, message); 
        }
        function displayMarker(locPosition, message) {
            const marker=new kakao.maps.Marker({
                map:map,
                position:locPosition
            });
            const iwContent=message,
                iwRemoveable=true;
            const infowindow=new kakao.maps.InfoWindow({
                content:iwContent,
                removable:iwRemoveable
            });
            infowindow.open(map,marker);
            map.setCenter(locPosition);
        }
    }
    return (
        <>
            <div id="map" style={{width:"200px", height:"300px"}}></div>
        </>
    )
} 
export default Geolocation;