import GlMap from "../Layouts/GlMap";
import SearchFilter from "../Layouts/SearchFilter";
import PlacesCard from "../Layouts/PlacesCard";
import { ApiContext } from "../../ApiContext";
import { Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import SwipeableEdgeDrawer from "../Layouts/Swibable";
import { createContext } from "react";
import axios from "axios";
export const SelectionContext = createContext(null);

const Search = () => {
  const dataApi = useContext(ApiContext);
  const [unitsData, setunitsData] = useState(dataApi);
  const [allLocations, setLocations] = useState([]);
  const [categories, setCategories] = useState(['Appartment' , 'Villa' , 'House' , 'Office']);
  const [cities, setCities] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    region: null,
    category: null,
    city: null,
  });

  const GetRequest = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/alllocations");
      setLocations(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  let allregions = allLocations.map((itm) => {
    return itm.region.region_name;
  });
  let regions = allregions.filter((c, index) => {
    return allregions.indexOf(c) === index;
  });

  let getRegionCategories = dataApi.map((unit)=>{
    
     
      ;
    })

  useEffect(() => {
    GetRequest();
   
  }, []);

  let majorFilter = (item) => {
    if (item.location.unit_region == selectedFilters.region) {
      if (item.unit.unit_category == selectedFilters.category) {
        if (item.location.unit_city == selectedFilters.city) {
          return item;
        }
      }
    }
  };
  let catFilter = (item) => {
    if(item.location[0].region_name == selectedFilters.region){
      return item;
     }
  };

let itmscat=dataApi.filter(catFilter);
let cats = itmscat.map((unit)=>{
  return unit.unit.category_name

})
let allCats = cats.filter((c, index) => {
  return cats.indexOf(c) === index;
});


  let mapData = dataApi.map((itm) => {
    return {
      lng: itm.unit.unit_longitude,
      lat: itm.unit.unit_latitude,
    };
  });

 


  let cardDara = dataApi.map((itm) => {
    
    return (
      <PlacesCard
        key={itm.unit.id}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        description={itm.unit.unit_description}
        rooms={itm.props[0].bedroom}
        bathrooms={itm.props[0].bathroom}
        space="170"
        image={`http://127.0.0.1:8000${itm.photos[0].unit_image_url}`}
      />
    );
  });

  const windowWidth = window.innerWidth;

  const sendDataToParent = (selected, index) => {
    switch (index) {
      case 1:
        setSelectedFilters({
          region: selected,
          category: selectedFilters.category,
          city: selectedFilters.city,
        });
        setCategories();

        break;
      case 2:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selected,
          city: selectedFilters.city,
        });
        setCities();
        break;
      case 3:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selectedFilters.category,
          city: selected,
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setunitsData(unitsData.filter(majorFilter));
    console.log(allCats);
  }, [selectedFilters]);

  return (
    <>
      {windowWidth <= 768 ? (
        <div className="bg-[#f2f2f2] md:h-[100vh]">
          <Container className="absolute">
            <SearchFilter
            categories={categories}
              regions={regions}
              sendDataToParent={sendDataToParent}
            />
          </Container>
          <Container
            fluid
            className="p-0 w-[100%] flex flex-col lg:flex-row h-[70%]"
          >
            <Container
              fluid
              className="p-0 mapps g:h-[100vh] w-[100%] md:w-[70%] bg-black "
            >
              <GlMap data={mapData} />
            </Container>
            <SwipeableEdgeDrawer />
          </Container>
        </div>
      ) : (
        <div className="bg-[#f2f2f2] md:h-[100vh]">
          <Container className="">
            <SearchFilter
            categoriess={categories}
              regions={regions}
              sendDataToParent={sendDataToParent}
            />
          </Container>{" "}
          <Container
            fluid
            className="p-0 w-[100%] flex flex-col lg:flex-row h-[70%]"
          >
            <Container
              fluid
              className="w-[100] md:w-[60%] placeCardss overflow-y-scroll md:max-h-[100%] px-3 py-"
            >
              {cardDara}
            </Container>
            <Container
              fluid
              className="p-0 mapps g:h-[70vh] w-[100%] md:w-[70%] bg-black "
            >
              {/* <GlMap data={mapData} /> */}
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default Search;
