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
        const map=new kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat=position.coords.latitude,
                    lon=position.coords.longitude;
                const locPosition=new kakao.maps.LatLng(lat,lon),
                    message='<div style="padding:5px;">여기에 계신가요?</div>';
                //마커와 인포윈도우 표시
                displayMarker(locPosition, message);
            });
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
            const locPosition=new kakao.maps.LatLng(37.5029087190,127.0377563750),
                message='geolocation을 사용할 수 없어요..'
            displayMarker(locPosition, message); 
        }
        //지도에 마커와 인포윈도우 표시
        function displayMarker(locPosition, message) {
            const marker=new kakao.maps.Marker({
                map:map,
                position:locPosition
            });
            const iwContent=message,
                iwRemoveable=true;
            //인포윈도우 생성
            const infowindow=new kakao.maps.InfoWindow({
                content:iwContent,
                removable:iwRemoveable
            });
            //인포윈도우를 마커에 표시
            infowindow.open(map,marker);
            //지도 중심좌표를 접속위치로 변경
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