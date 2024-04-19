import React, {useEffect} from "react";
const {kakao} = window;

function Kakao() {
    useEffect(()=> {
        const container=document.getElementById('map');
        const options={
        center: new kakao.maps.LatLng(33.450701, 126.5706567), //지도의 중심좌표
        level:3
    };
    const map=new kakao.maps.Map(container,options); //지도 생성 및 객체 리턴
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.5706567);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    },[])
    return (
        <div id="map" style={{
            margin:'10px',
            width:'300px',
            height:'300px'
        }}></div>
    )
}
export default Kakao;