import React, {useEffect,useState} from "react";
const {kakao} = window;

const Kakao2=() => {
    //마커를 클릭하면 장소명을 표출할 인포윈도우
    var infowindow=new kakao.maps.InfoWindow({zIndex:1});

    var mapContainer=document.getElementById('map'),
        mapOption = {
            center:new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
    //지도생성
    var map=new kakao.mpas.Map(mapContainer, mapOption);
    //장소 검색 객체 생성
    var ps=new kakao.maps.services.Places();
    //키워드로 장소 검색
    ps.keywordSearch('이태원 맛집',placeSearchCB);
    //키워드 검색 완료 시 호출되는 콜백함수
    function placeSearchCB(data, status,pagination) {
        if (status === kakao.maps.services.Status.OK) {
            //LatLngBounds 객체에 좌표추가
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            //검색된 장소 위치를 기준으로 지도범위 재설정
            map.setBounds(bounds);
        }
    }
    function displayMarker(place) {
        var marker=new kakao.maps.Marker({
            map:map,
            position:new kakao.maps.LatLng(place.y,place.x)
        });
        //마커에 클릭이벤트 등록
        kakao.maps.event.addListener(marker, 'click', function() {
            //마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent('<div style="padding:5px; font-size:12px;">' + place.palce_name+'</div>');
            infowindow.open(map, marker);
        });
    }

}
export default Kakao2;