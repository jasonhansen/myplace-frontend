import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import "./Map.css";

const Map = props => {
    const { center, zoom } = props;
    const mapRef = useRef();
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiamFja2hhbnNlbiIsImEiOiJjbHZ4aGl4MDYyZW1pMnFtczk5dGpwcXRoIn0.pqVM6L1Muhi7X0z4Fbef0Q";
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: center,
            zoom: zoom,
        });
        new mapboxgl.Marker().setLngLat(center).addTo(map);
    }, [center, zoom])

    return (
        <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
        ></div>
    )
}

export default Map;