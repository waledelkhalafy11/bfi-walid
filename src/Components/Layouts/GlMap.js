import { useState, useEffect } from "react";
import markerIcon from '../../Assets/icons/map-marker.svg'
import ReactMapGL , { Marker, Popup }  from "react-map-gl";
import * as parkDate from "../../data/skateboard-parks.json";

export default function GlMap() {
  const parkDateF = parkDate ;
  const [viewport, setViewport] = useState({
    latitude: 30.044420,
    longitude: 31.235712,
    width : "100%" ,
    height: "65vh",
    zoom: 13
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
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
        {parkDateF.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={markerIcon} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null} 
      </ReactMapGL>
    </div>
  );
}

