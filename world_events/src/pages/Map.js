import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map({}) {
  const [center, setCenter] = useState({lat: 59.95,lng: 30.33});
  const [zoom, setZoom] = useState(11);

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(map);
    console.log(maps);
  };
    return (
      <div className="Map">
        <div className="googleMap">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD1WcbAFPxRj_CmDiXCo38yBh3gZaTeEaY" }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >

      </GoogleMapReact>
        </div>
      </div>
    );
  }
