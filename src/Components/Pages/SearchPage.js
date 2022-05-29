import GlMap from "../Layouts/GlMap";
import SearchIcon from "@mui/icons-material/Search";
import PlacesCard from "../Layouts/PlacesCard";
import { useEffect, useState } from "react";
import SwipeableEdgeDrawer from "../Layouts/Swibable";
import { createContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Form,
  Button,
  Container,
} from "react-bootstrap";

//  ********* Context API *************
export const SelectionContext = createContext(null);

const Search = () => {

  //  ********* Redux Context *************
  const dataApiPromise = useSelector(state => state);


  //  ********* States Start *************
  const [dataApi, setDataApi] = useState([]);
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
  // +-+-+-+-+- States End +-+-+-+-+-

  

  //  ********* Locations Request Start *************
  const GetRequest = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/alllocations`);
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

  // +-+-+-+-+- Locations Request End +-+-+-+-+-



  //  ********* Data Filtration Start *************

  let majorFilter = (item) => {
    if (selectedFilters.region == item.location[0].region_name || selectedFilters.region == "all" ) {

      if (selectedFilters.city == item.location[0].city_name || selectedFilters.city == "all") {
    
    
        if (selectedFilters.category == item.unit.unit_category || selectedFilters.category == "all") {
          return item
        }else if (selectedFilters.category == null ){
          return item
      
        }
    
    
      }else if (selectedFilters.city == null ){

      return item 
      }
    }else if (selectedFilters.region == null){

      return item
    }


  };

  const selectedData = (selected, index) => {
    switch (index) {
      case 1:
        setSelectedFilters({
          region: selected,
          category: null,
          city: null,
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

  let isRegion = (region) => {
    return region.region.region_name === selectedFilters.region;
  }
  let isCity = (city) => {
    return city.city_name === selectedFilters.city;
  }


  //  +-+-+-+-+- Data Filtration End +-+-+-+-+-



  //  ********* Child Props Data Start *************

  let mapData = dataApi.map((itm) => {
    return {
      'image': process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url,
      'name': itm.unit.unit_name,
      'price': itm.unit.unit_price,
      'description': itm.unit.unit_description,
      'lng': itm.unit.unit_longitude,
      'lat': itm.unit.unit_latitude,
    };
  });


console.log(dataApi[0]);
  let cardData = dataApi.map((itm) => {
    return (
      <PlacesCard
        key={itm.unit.id}
        id={itm.unit.id}
        city={itm.location[0].city_name}
        address={itm.unit.unit_address}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        description={itm.unit.unit_description}
        rooms={itm.props[0].bedroom}
        bathrooms={itm.props[0].bathroom}
        space={itm.props[0].surface_area}
        image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
      />
    );
  });

  let cardDara = unitsData.map((itm) => {
    return (
      <PlacesCard
        key={itm.unit.id}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        description={itm.unit.unit_description}
        rooms={itm.props[0].bedroom}
        bathrooms={itm.props[0].bathroom}
        space="170"
        image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
      />
    );
  });

  // +-+-+-+-+- Child Props Data End +-+-+-+-+-



  //  ********* UseEffects Start *************

  const windowWidth = window.innerWidth;



  useEffect(() => {
    dataApiPromise.then(function (result) {
      setDataApi(result);

    });
  },[])


  useEffect(() => {
    GetRequest();
    setunitsData(dataApi.filter(majorFilter));
  }, []);


  useEffect(() => {
    let allCats11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if (selectedFilters.city == itm.location[0].city_name) {
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

    let allcities12 = allcities11.filter((c, index) => {
      return allcities11.indexOf(c) === index;
    });
    let allCats12 = allCats11.filter((c, index) => {
      return allCats11.indexOf(c) === index;
    });
  
    setCategories(allCats12);
    setCities(allcities12);
    let region = allLocations.find(isRegion);



    if(selectedFilters.city != null && selectedFilters.city != 'all' && selectedFilters.city != '' ){
      let region = allLocations.find(isRegion);
      let city = region.cities.find(isCity);
      setMapZoom(city)
    }else{
    let region = allLocations.find(isRegion);
    setMapZoom(region)

    }
    setunitsData(dataApi.filter(majorFilter));
  }, [selectedFilters]);

  // +-+-+-+-+- UseEffects End +-+-+-+-+-

  

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
                    {cities?.map((city) => {
                      return <option value={city}>{city}</option>
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
                    {categories?.map((category) => {
                      return <option value={category}>{category}</option>
                    })}
                  </Form.Select>
                </div>
                {/* <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                  <Button
                    className="md:ml-2 bg-[#45b6ca] rounded-full w-[100%] border-none"
                    size="lg"
                  >
                    <SearchIcon />
                    Search
                  </Button>
                </div> */}
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
              <GlMap selectedunits={unitsData} mapzoom={mapZoom} data={mapData} />
            </Container>
            <SwipeableEdgeDrawer carddata={unitsData} />
          </Container>
        </div>
      ) : (
        <div className="bg-[#f2f2f2] md:h-[100vh]">
          <Container className="">
            <Container className="static top px-[10%] p-[2%] md:px-[5%] ">
              <Container className="bg-white border-2 p-2 md:h-[80px] rounded-3xl md:rounded-3xl mt-[20%] md:mt-[10%] flex flex-col md:flex-row">
                <>
                  {" "}
                  <div className="md:w-[33%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Region
                    </Form.Label>
                    <Form.Select
                      className="md:ml-2 w-[50%] border-none"
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

                  <div className="md:w-[33%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      City
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => selectedData(e.target.value, 3)}
                      className="md:ml-2 w-[50%] border-none"
                      size="sm"
                    >
                      <option disabled selected>
                        Select City
                      </option>
                      <option value="all">All</option>
                      {cities?.map((city) => {
                        return <option value={city}>{city}</option>
                      })}
                    </Form.Select>
                  </div>
                  <div className="md:w-[33%] flex mx-2 flex-col">
                    <Form.Label className="md:ml-4 text-xl text-left">
                      Category
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => selectedData(e.target.value, 2)}
                      className="md:ml-2 w-[50%] border-none ay7aga"
                      size="sm"
                    >
                      <option disabled selected>
                        Select a Category
                      </option>
                      <option value="all">All</option>
                      {categories?.map((category) => {
                        return <option value={category}>{category}</option>
                      })}
                    </Form.Select>
                  </div>
                  {/* <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                    <Button
                      className="md:ml-2 bg-[#45b6ca] rounded-full w-[100%] border-none"
                      size="lg"
                    >
                      <SearchIcon />
                      Search
                    </Button>
                  </div> */}
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
              {unitsData[0] ? cardDara : cardData}
            </Container>
            <Container
              fluid
              className="p-0 mapps g:h-[70vh] w-[100%] md:w-[70%] bg-black "
            >
              <GlMap selectedunits={unitsData} mapzoom={mapZoom} data={mapData} />
            </Container>
          </Container>
        </div>
      )}
    </>
  );
};

export default Search;
