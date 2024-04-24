import React, {useState,useEffect,useRef} from "react";
import '../App.css';
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
    const [address, setAdress]=useState(null);
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

    const getAdress = (lat,lng) => {
        const geocoder = new kakao.maps.services.Geocoder(); //좌표 -> 주소로
        const coord = new kakao.maps.LatLng(37.5029087190,127.0377563750);
        const callback = function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                setAdress(result[0].address);
            }
        };
        geocoder.coord2Address(coord.getLng, coord.getLat, callback);
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
    },[])
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
                <MapMarker position={{lat:37.5029087190, lng:127.0377563750 }}></MapMarker>
                <button onClick={getCoordinates}>현재 위치 좌표 얻기</button>
                <CustomOverlayMap position={state.center}>
                    <div className="overlay">Here!</div>
                </CustomOverlayMap>
                <button onClick={()=>setLevel(level - 1)}>-</button>
                <button onClick={()=>setLevel(level + 1)}>+</button>
                <button onClick={getAdress}>현재 좌표의 주소 얻기</button>
                {!state.isLoading && (
                    <MapMarker position={state.center}>
                        <div style={{padding:"5px", color:"#000"}}>
                            {state.errMsg ? state.errMsg:"여기에 계신가요?"}
                        </div>
                        
                    </MapMarker>
                )}
            </Map>
            {address && (
                <div>
                    현재 좌표의 주소는..
                    <p>address_name: {address.adress_name}</p>
                    <p>region_1depth_name: {address.region_1depth_name}</p>
                    <p>region_2depth_name: {address.region_2depth_name}</p>
                    <p>region_3depth_name: {address.region_3depth_name}</p>
                </div>
            )}
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