import GlMap from "../Layouts/GlMap";
import SearchIcon from "@mui/icons-material/Search";
import SearchFilter from "../Layouts/SearchFilter";
import PlacesCard from "../Layouts/PlacesCard";
import { ApiContext } from "../../ApiContext";
import { useEffect, useState, useContext } from "react";
import SwipeableEdgeDrawer from "../Layouts/Swibable";
import { createContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
} from "react-bootstrap";
export const SelectionContext = createContext(null);

const Search = () => {
  const [dataApi, setDataApi] = useState([]);
  // const dataApi = useContext(ApiContext);
  const dataApiPromise = useSelector(state => state);
 
  const [unitsData, setunitsData] = useState([...dataApi]);
  const [allLocations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [mapZoom, setMapZoom] = useState({});
  const [categories, setCategories] = useState([
    "Appartment",
    "Villa",
    "House",
    "Office",
  ]);
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
  useEffect(() => {
    
    GetRequest();
  }, []);

  let majorFilter = (item) => {
    // if (item.location[0].unit_region == selectedFilters.region) {
    //   if (item.location[0].unit_city == selectedFilters.city) {
    //     if (item.unit.unit_category == selectedFilters.category) {
    //       return item;
    //     }
    //   }
    // }

    if(selectedFilters.region ==  'Egypt'){
      return item 
    }
  };
  let catFilter = (item) => {
    if (item.location[0].region_name == selectedFilters.region) {
      return item;
    }
  };

  let itmscat = dataApi.filter(catFilter);
  let cats = itmscat.map((unit) => {
    return unit.unit.category_name;
  });
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
  let isRegion = (region)=> {
    return region.region.region_name === selectedFilters.region;
  }

  const windowWidth = window.innerWidth;

  const selectedData = (selected, index) => {
    switch (index) {
      case 1:
        setSelectedFilters({
          region: selected,
          category: selectedFilters.category,
          city: selectedFilters.city,
        });



        break;
      case 2:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selected,
          city: selectedFilters.city,
        });
        
       

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
useEffect(()=>{

  dataApiPromise.then(function(result) {
    setDataApi(result);
      });
},)
  useEffect(() => {
    console.log(selectedFilters);
   
    let allCats11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if(selectedFilters.city == itm.location[0].city_name){
          allCats11.push(itm.unit.unit_category)
        }
      }
    });
    let allcities11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        allcities11.push(itm.location[0].city_name)
      }
    });
    setCategories(allCats11);
    setCities(allcities11); 
    // let mapdata= {};
    // if(selectedFilters.city == 'All' | selectedFilters.city == null){

    //   let the_region = allLocations?.filter(function(x){
    //     if(x.region == selectedFilters.region ){

    //       return x
    //     }
    //   })
    //   mapdata = {
    //    'lng' : the_region.region_longitude , 
    //    'lat' : the_region.region_latitude
    //   }
    //   setMapZoom(mapdata)
      
    // }else{
    //  let the_region = allLocations?.filter(function(x){
    //    if(x.region == selectedFilters.region )
    //    return x
    //  })
    //  let the_city = the_region.cities.filter(function(x){
    //   if(x.city_name == selectedFilters.city ){

    //     return x
    //   }
    // })
    //  mapdata = {
    //   'lng' : the_city.city_longitude , 
    //   'lat' : the_city.city_latitude
    //  }
    //  setMapZoom(mapdata)
    // }
    // console.log(unitsData);

    let region = allLocations.find(isRegion);
    setMapZoom(region)




    setunitsData(dataApi.filter(majorFilter));
    console.log(unitsData);
  }, [selectedFilters]);

  return (
    <>
      {windowWidth <= 768 ? (
        <div className="bg-[#f2f2f2] md:h-[100vh]">
          <Container className="absolute top-2 z-50">
          <Container className="bg-white border-2 p-2 md:h-[80px] rounded-3xl md:rounded-3xl mt-[20%] md:mt-[10%] flex flex-col md:flex-row">
                <>
                  {" "}
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Region
                    </Form.Label>
                    <Form.Select
                      className="md:ml-2 w-[100%] border-none"
                      size="sm"
                      onChange={(e) => selectedData(e.target.value, 1)}
                    >
                      <option disabled selected>
                        Select a Region
                      </option>
                      <option value="all">All</option>
                      {regions.map((region) => {
                        return <option value={region}>{region}</option>;
                      })}
                    </Form.Select>
                  </div>
                 
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      City
                    </Form.Label>
                    <Form.Select
                    onChange={(e) => selectedData(e.target.value, 3)}
                      className="md:ml-2 w-[100%] border-none"
                      size="sm"
                    >
                      <option disabled selected>
                        Select City
                      </option>
                      <option value="all">All</option>
                      {cities?.map((city)=>{
                     return<option value={city}>{city}</option>
                    })}
                    </Form.Select>
                  </div>
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Category
                    </Form.Label>
                    <Form.Select
                    onChange={(e) => selectedData(e.target.value, 2)}
                      className="md:ml-2 w-[100%] border-none ay7aga"
                      size="sm"
                    >
                      <option disabled selected>
                        Select a Category
                      </option>
                      <option value="all">All</option>
                      {categories?.map((category)=>{
                     return<option value={category}>{category}</option>
                    })}
                    </Form.Select>
                  </div>
                  <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                    <Button
                      className="md:ml-2 bg-[#45b6ca] rounded-full w-[100%] border-none"
                      size="lg"
                    >
                      <SearchIcon />
                      Search
                    </Button>
                  </div>
                </>
              </Container>
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
            <Container className="static top px-[10%] p-[2%] md:px-[5%] ">
              <Container className="bg-white border-2 p-2 md:h-[80px] rounded-3xl md:rounded-3xl mt-[20%] md:mt-[10%] flex flex-col md:flex-row">
                <>
                  {" "}
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Region
                    </Form.Label>
                    <Form.Select
                      className="md:ml-2 w-[100%] border-none"
                      size="sm"
                      onChange={(e) => selectedData(e.target.value, 1)}
                    >
                      <option disabled selected>
                        Select a Region
                      </option>
                      <option value="all">All</option>
                      {regions.map((region) => {
                        return <option value={region}>{region}</option>;
                      })}
                    </Form.Select>
                  </div>
                 
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      City
                    </Form.Label>
                    <Form.Select
                    onChange={(e) => selectedData(e.target.value, 3)}
                      className="md:ml-2 w-[100%] border-none"
                      size="sm"
                    >
                      <option disabled selected>
                        Select City
                      </option>
                      <option value="all">All</option>
                      {cities?.map((city)=>{
                     return<option value={city}>{city}</option>
                    })}
                    </Form.Select>
                  </div>
                  <div className="md:w-[25%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Category
                    </Form.Label>
                    <Form.Select
                    onChange={(e) => selectedData(e.target.value, 2)}
                      className="md:ml-2 w-[100%] border-none ay7aga"
                      size="sm"
                    >
                      <option disabled selected>
                        Select a Category
                      </option>
                      <option value="all">All</option>
                      {categories?.map((category)=>{
                     return<option value={category}>{category}</option>
                    })}
                    </Form.Select>
                  </div>
                  <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                    <Button
                      className="md:ml-2 bg-[#45b6ca] rounded-full w-[100%] border-none"
                      size="lg"
                    >
                      <SearchIcon />
                      Search
                    </Button>
                  </div>
                </>
              </Container>
            </Container>
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
              <GlMap mapzoom={mapZoom} data={mapData} />
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default Search;
