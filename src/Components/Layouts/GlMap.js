import { useState, useEffect } from "react";
import markerIcon from '../../Assets/icons/map-marker.svg'
import ReactMapGL , { Marker, Popup }  from "react-map-gl";
import * as placesData from "../../data/places-on-map.json";

export default function GlMap() {
  const placesMarkers = placesData ;
  const [viewport, setViewport] = useState({
    latitude: 30.044420,
    longitude: 31.235712,
    width : "100vw" ,
    height: "65vh",
    zoom: 13
  });
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);



  
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {placesMarkers.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(park);
              }}
            >
              <img src={markerIcon} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPlace ? (
          <Popup
          className="rounded-full"
            latitude={selectedPlace.geometry.coordinates[1]}
            longitude={selectedPlace.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div >
              <h2>{selectedPlace.properties.NAME}</h2>
              <p>{selectedPlace.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null} 
      </ReactMapGL>
    </div>
  );
}

