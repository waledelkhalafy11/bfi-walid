import { useState, useEffect , useCallback , useRef } from "react";
import markerIcon from '../../Assets/icons/marker.svg'
import 'mapbox-gl/dist/mapbox-gl.css';
import markerIcon2 from '../../Assets/icons/map-marker2.svg'
import ReactMapGL , { Marker, Popup ,NavigationControl , GeolocateControl }  from "react-map-gl";
import * as placesData from "../../data/places-on-map.json";
import placeImg from "../../Assets/imgs/placeimg.jpg";
import { number } from "yup";

export default function GlMap(props) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedUnits, setSelectedUnits] = useState(null);
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
  const geolocateControlRef = useCallback((ref) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);

let mapData =  props.data
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

    let lng2 =Number(props.mapzoom?.city_longitude);
    let lat2 =Number(props.mapzoom?.city_latitude);
    
    let lng3 =Number(props.mapzoom?.dist_longitude);
    let lat3 =Number(props.mapzoom?.dist_latitude);
   
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
    }else if(lng2){
      setViewport({...viewport , 
        latitude: lat2, 
        longitude :lng2
        , zoom : 8
      })
    }
    else if(lng3){
      setViewport({...viewport , 
        latitude: lat3, 
        longitude :lng3
        , zoom : 12
      })
    }


  },[props.mapzoom])

  useEffect(()=>{
   
  },[selectedRegion])


  mapData.map((unit , i ) => (
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
  ))


  const geolocateControlStyle = {
    right: 10,
    top: 10
  };
  useEffect(()=>{
     if(props.selectedunits[0]){
     setSelectedUnits(props.selectedunits)
    }
  }, [props.selectedunits])
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
        
        onViewportChange={viewport => {
          setViewport(viewport);
        
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        
      >
        { props.selectedunits[0] ? 
      selectedUnits?.map((unit , i ) => (
        <Marker
          key={i}
          latitude={Number(unit.unit.unit_latitude)}
          longitude={Number(unit.unit.unit_longitude)}
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
      ))
    :
      mapData.map((unit , i ) => (
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
      ))
    }
        <GeolocateControl  
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: false }}
        trackUserLocation={false}
        auto /> 
        <NavigationControl/>
          {selectedPlace ? 
          props.selectedunits[0] ? 
          
          (
            <Popup
            className="rounded-full"
              latitude={Number(selectedPlace.unit.unit_latitude)}
              longitude={Number(selectedPlace.unit.unit_longitude)}
              onClose={() => {
                setSelectedPlace(null);
              }}
            >
              <div className="flex  flex-row">
                <img className="ml-2 w-[60px] md:w-[40%] rounded-xl md:rounded-lg" src={process.env.REACT_APP_DOMAIN+selectedPlace.photos[0].unit_image_url}></img>
                <div className="flex flex-col">
                <h2 className="text-sm ml-1 md:text-3xl">{selectedPlace.unit.unit_name}</h2>
            

  <h4 className="text-[10px] md:text-lg">{selectedPlace.unit.unit_price} LE </h4>
                </div>
              </div>
            </Popup>
          ) 
          :
          (
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
            

  <h4 className="text-[10px] md:text-lg">{selectedPlace.price} LE</h4>
                </div>
              </div>
            </Popup>
          ) 
         : null} 
          
      </ReactMapGL>
    </div>
  );
}

