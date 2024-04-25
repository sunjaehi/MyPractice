import React, {useState,useEffect,useRef} from "react";
import '../App.css';
import { sample } from "../data/sample";
import {Map,MapMarker,CustomOverlayMap} from 'react-kakao-maps-sdk';
const {kakao} = window;


function Geo() {
    /*
    const mapContainer=document.getElementById('map'),
        mapOption = {
            center:new kakao.maps.LatLng(37.5029087190,127.0377563750),
            level:10
        };
    const map=new kakao.maps.Map(mapContainer, mapOption);
    */
    const [state, setState]=useState({
        center: {
            lat: 37.5029087190,
            lng: 127.0377563750,
        },
        errMsg:null,
        isLoading: true,
    });
    const [level, setLevel]=useState(5);
    //const [address, setAdress]=useState(null);
    const [coordinates, setCoordinates]=useState(null);
    const mapRef=useRef();

    const getCoordinates = () => {
        const map=mapRef.current;

        setCoordinates({
            center:{
                lat:map.getCenter().getLat(),
                lng:map.getCenter().getLng(),
            },
        });
    };
    useEffect (() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position)=> {
                    setState((prev)=>({
                        ...prev,
                        center:{
                            lat:position.coords.latitude,
                            lng:position.coords.longitude,
                        },
                        isLoading:false,
                    }))
                },
                (err)=> {
                    setState((prev)=>({
                        ...prev,
                        errMsg:err.message,
                        isLoading:false,
                    }))
                }
            )
        } else {
            setState((prev)=> ({
                ...prev,
                errMsg: "geolocation을 사용할 수 없어요..",
                isLoading:false,
            }))
        }
        
    },[]);
    /*
     {positions.map((position, index) => (
        <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
    */

    
    return (
        <>
            <Map
                center={state.center}
                style={{
                    width:"300px",
                    height:"300px",
                    margin:"10px"
                }}
                level={level}
                ref={mapRef}
            >
                
                <button onClick={getCoordinates}>현재 위치 좌표 얻기</button>
                <CustomOverlayMap position={state.center}>
                    <div className="overlay">Here!</div>
                </CustomOverlayMap>
                <button onClick={()=>setLevel(level - 1)}>-</button>
                <button onClick={()=>setLevel(level + 1)}>+</button>
                {sample.map((position)=> (
                <MapMarker
                    key={`${position.id}`}
                    position={position.latlng}
                    image={{
                        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                        size: {
                            width:24,
                            height:35
                        },
                    }}
                    title={position.tite}
                    />
            ))}
                {!state.isLoading && (
                    <MapMarker position={state.center}>
                        <div style={{padding:"5px", color:"#000"}}>
                            {state.errMsg ? state.errMsg:"여기에 계신가요?"}
                        </div>
                    </MapMarker>
                )}

            </Map>
            {coordinates && (
                <div>
                    현재 위치의 좌표는..
                    <p>위도 : {coordinates.center.lat}</p>
                    <p>경도 : {coordinates.center.lng}</p>
                </div>
            )}
            
        </>
    );
};
export default Geo;