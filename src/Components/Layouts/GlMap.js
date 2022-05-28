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
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState({
    'lng': 0 , 
    'lat' : 0 
  });
  const [viewport, setViewport] = useState({
    latitude: selectedRegion.lat,
    longitude: selectedRegion.lng,
    width : "200" ,
    height: "300",
    zoom: 2 , 
    
  });
  

const mapData =  props.data
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
  useEffect(()=>{
    let lng =Number(props.mapzoom?.region?.region_longitude);
    let lat =Number(props.mapzoom?.region?.region_latitude);
    
   
    setSelectedRegion({
      'lng': lng , 
      'lat' :lat 
    })
    if(lng){

        setViewport({...viewport , 
          latitude: lat, 
          longitude :lng
          , zoom : 5
        })
    }


  },[props.mapzoom])

  useEffect(()=>{
   
  },[selectedRegion])
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
        {mapData.map((unit , i ) => (
          <Marker
            key={i}
            latitude={Number(unit.lat)}
            longitude={Number(unit.lng)}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPlace(unit);
              }}
            >
              <img className="w-[40px]" src={markerIcon2} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
        
        <NavigationControl/>
          {selectedPlace ? (
            <Popup
            className="rounded-full"
              latitude={Number(selectedPlace.lat)}
              longitude={Number(selectedPlace.lng)}
              onClose={() => {
                setSelectedPlace(null);
              }}
            >
              <div className="flex  flex-row">
                <img className="ml-2 w-[60px] md:w-[40%] rounded-xl md:rounded-lg" src={selectedPlace.image}></img>
                <div className="flex flex-col">
                <h2 className="text-sm ml-1 md:text-3xl">{selectedPlace.name}</h2>
            

  <h4 className="text-[10px] md:text-lg">2,000,0000 LE </h4>
                </div>
              </div>
            </Popup>
          ) : null} 
          
      </ReactMapGL>
    </div>
  );
}

