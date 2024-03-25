import mapboxgl from 'mapbox-gl'
import React, { useRef, useEffect, useState } from 'react';


mapboxgl.accessToken = "pk.eyJ1Ijoic2ltb25vcm8xIiwiYSI6ImNsdTZ5dzk1dTAwaHAyaWw5dzllOGhuYW4ifQ.7AsqxVyW4G0ntDK6v4lbyA"


export const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if(map.current) return;
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
    })
  return (
    <div>
        <div ref={mapContainer} className='w-96 h-full'></div>
    </div>
  )
}
