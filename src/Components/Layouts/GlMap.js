import { useState, useEffect } from "react";
import markerIcon from '../../Assets/icons/marker.svg'
import 'mapbox-gl/dist/mapbox-gl.css';
import markerIcon2 from '../../Assets/icons/map-marker2.svg'
import ReactMapGL , { Marker, Popup ,NavigationControl }  from "react-map-gl";
import * as placesData from "../../data/places-on-map.json";
import placeImg from "../../Assets/imgs/placeimg.jpg";
import { number } from "yup";

export default function GlMap(props) {
  const placesMarkers = placesData ;
  const [viewport, setViewport] = useState({
    latitude: 30.044420,
    longitude: 31.235712,
    width : "200" ,
    height: "300",
    zoom: 13 , 
    
  });
  const [selectedPlace, setSelectedPlace] = useState(null);
const sssss =  props.data
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
        mapboxApiAccessToken='pk.eyJ1Ijoid2FsZWRlbGtoYWxhZnkiLCJhIjoiY2wyNWo3bHFkMjluZzNqbXRleGlyN3ZyaCJ9.coSVjsI0VLsTl6198hKECQ'
        
        onViewportChange={viewport => {
          setViewport(viewport);
        
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        
      >
        {sssss.map((park , i ) => (
          <Marker
            key={i}
            latitude={Number(park.lat)}
            longitude={Number(park.lng)}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(park);
              }}
            >
              <img className="w-[40px]" src={markerIcon2} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
        <NavigationControl/>
        {/* {selectedPlace ? (
          <Popup
          className="rounded-full"
            latitude={selectedPlace.geometry.coordinates[1]}
            longitude={selectedPlace.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPlace(null);
            }}
          >
            <div className="flex  flex-row">
              <img className="ml-2 w-[60px] md:w-[40%] rounded-xl md:rounded-lg" src={placeImg}></img>
              <div className="flex flex-col">
              <h2 className="text-sm ml-1 md:text-3xl">{selectedPlace.properties.NAME}</h2>
          

<h4 className="text-[10px] md:text-lg">2,000,0000 LE </h4>
              </div>
            </div>
          </Popup>
        ) : null}  */}
      </ReactMapGL>
    </div>
  );
}

