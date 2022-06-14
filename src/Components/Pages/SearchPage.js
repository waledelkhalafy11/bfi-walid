import GlMap from "../Layouts/GlMap";
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
  Modal,
} from "react-bootstrap";

//  ********* Context API *************
export const SelectionContext = createContext(null);

const Search = () => {

  //  ********* Redux Context *************
  const dataApiPromise = useSelector(state => state.apiReducer);


  //  ********* States Start *************
  const [dataApi, setDataApi] = useState([]);
  const [searchModal, setSerchModal] = useState(false);
  const [unitsData, setunitsData] = useState([...dataApi]);
  const [allLocations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [mapZoom, setMapZoom] = useState({});
  const [showResFilter, setShowResFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [unitCategories, setUnitCategories] = useState([]);
  const [resUnitCategories, setResUnitCategories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    region: null,
    category: null,
    city: null,
    district: null,
    unitcat: null,
    rescat: null
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
    if (selectedFilters.region == item.location[0].region_name || selectedFilters.region == "all") {
      if (selectedFilters.city == item.location[0].city_name || selectedFilters.city == "all") {
        if (selectedFilters.district == item.location[0].dist_name || selectedFilters.district == "all") {
          if (selectedFilters.category == item.unit.main_category || selectedFilters.category == "all") {
            if (selectedFilters.unitcat == item.unit.unit_category || selectedFilters.unitcat == "all") {
              if (selectedFilters.rescat == item.unit.res_unit_category || selectedFilters.rescat == "all") {
                return item
              } else if (selectedFilters.rescat == null) {
                return item
              }
            } else if (selectedFilters.unitcat == null) {
              return item
            }
          } else if (selectedFilters.category == null) {
            return item
          }
        } else if (selectedFilters.district == null) {

          return item
        }
      } else if (selectedFilters.city == null) {
        return item
      }
    } else if (selectedFilters.region == null) {
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
          district: null
        });
        break;
      case 2:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selected,
          city: selectedFilters.city,
          district: selectedFilters.district,
          unitcat: selectedFilters.unitcat,
          rescat: selectedFilters.rescat

        });
        break;
      case 3:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selectedFilters.category,
          city: selected,
          district: selectedFilters.district,
          unitcat: selectedFilters.unitcat,
          rescat: selectedFilters.rescat

        });
        break;
      case 4:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selectedFilters.category,
          city: selectedFilters.city,
          district: selected,
          unitcat: selectedFilters.unitcat,
          rescat: selectedFilters.rescat

        });
        break;
      case 5:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selectedFilters.category,
          city: selectedFilters.city,
          district: selectedFilters.district,
          unitcat: selected,
          rescat: selectedFilters.rescat

        });
        break;
      case 6:
        setSelectedFilters({
          region: selectedFilters.region,
          category: selectedFilters.category,
          city: selectedFilters.city,
          district: selectedFilters.district,
          unitcat: selectedFilters.unitcat,
          rescat: selected

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
  let isDist = (dist) => {
    return dist.dist_name == selectedFilters.district;
  }


  //  +-+-+-+-+- Data Filtration End +-+-+-+-+-

  const handleShowModal = () => setSerchModal(true)
  const handleCloseModal = () => setSerchModal(false)




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



  let cardData = dataApi.map((itm) => {
    return (
      <PlacesCard
        key={itm.unit.id}
        id={itm.unit.id}
        description={itm.unit.unit_description}
        city={itm.location.city_name}
        address={itm.unit.unit_address}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        category={itm.unit.main_category}
        rooms={itm.props[0].rooms}
        bathrooms={itm.props[0].bathroom}
        kitchen={itm.props[0].kitchen}
        bedroom={itm.props[0].bedroom}
        living_room={itm.props[0].living_room}
        garage={itm.props[0].garage}
        garden={itm.props[0].garden}
        elevator={itm.props[0].elevator}
        floor={itm.props[0].floor}
        space={itm.props[0].surface_area}
        image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
        location={itm.location[0].city_name + ', ' + itm.location[0].region_name}
      />
    );
  });

  let cardDara = unitsData.map((itm) => {
    return (
      <PlacesCard
        key={itm.unit.id}
        id={itm.unit.id}
        description={itm.unit.unit_description}
        city={itm.location.city_name}
        address={itm.unit.unit_address}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        category={itm.unit.main_category}
        rooms={itm.props[0].rooms}
        bathrooms={itm.props[0].bathroom}
        kitchen={itm.props[0].kitchen}
        bedroom={itm.props[0].bedroom}
        living_room={itm.props[0].living_room}
        garage={itm.props[0].garage}
        garden={itm.props[0].garden}
        elevator={itm.props[0].elevator}
        floor={itm.props[0].floor}
        space={itm.props[0].surface_area}
        image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
        location={itm.location[0].city_name + ', ' + itm.location[0].region_name}
      />
    );
  });

  // +-+-+-+-+- Child Props Data End +-+-+-+-+-



  //  ********* UseEffects Start *************

  const windowWidth = window.innerWidth;



  useEffect(() => {
    document.getElementById('bfiTitle').innerHTML = 'BFI | Search';
    dataApiPromise.then(function (result) {
      setDataApi(result);

    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])


  useEffect(() => {
    GetRequest();
    setunitsData(dataApi.filter(majorFilter));
  }, []);


  useEffect(() => {
    let allCats11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if (selectedFilters.city == itm.location[0].city_name) {
          if (selectedFilters.district == itm.location[0].dist_name) {
            allCats11.push(itm.unit.main_category)
          }
        }
      }
    });

    let allunitCats11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if (selectedFilters.city == itm.location[0].city_name) {
          if (selectedFilters.district == itm.location[0].dist_name) {
            if (selectedFilters.category == itm.unit.main_category) {
              allunitCats11.push(itm.unit.unit_category)
            }

          }
        }
      }
    });

    let allresCats11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if (selectedFilters.city == itm.location[0].city_name) {
          if (selectedFilters.district == itm.location[0].dist_name) {
            if (selectedFilters.category == itm.unit.main_category) {
              if (selectedFilters.unitcat == itm.unit.unit_category) {
                allresCats11.push(itm.unit.res_unit_category)
              }
            }
          }
        }
      }
    });

    let alldists11 = []
    dataApi.map((itm) => {
      if (selectedFilters.region == itm.location[0].region_name) {
        if (selectedFilters.city == itm.location[0].city_name) {
          alldists11.push(itm.location[0].dist_name)

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
    let alldists12 = alldists11.filter((c, index) => {
      return alldists11.indexOf(c) === index;
    });
    let allunitCats12 = allunitCats11.filter((c, index) => {
      return allunitCats11.indexOf(c) === index;
    });
    let allresCats12 = allresCats11.filter((c, index) => {
      return allresCats11.indexOf(c) === index;
    });

    setCities(allcities12);
    setDistricts(alldists12);
    setCategories(allCats12);
    setUnitCategories(allunitCats12)
    setResUnitCategories(allresCats12)
    let region = allLocations.find(isRegion);

    if (selectedFilters.category === "Residential") {
      setShowResFilter(true);
    } else {
      setShowResFilter(false)
    }


    if (selectedFilters.city != null && selectedFilters.city != 'all' && selectedFilters.city != '') {
      if (selectedFilters.district != null && selectedFilters.district != 'all' && selectedFilters.district != '') {
        let region = allLocations.find(isRegion);
        let dist = region.dists[0].find(isDist);

        setMapZoom(dist)
      } else {
        let region = allLocations.find(isRegion);
        let city = region.cities.find(isCity);
        setMapZoom(city)
      }
    }
    else {
      let region = allLocations.find(isRegion);
      setMapZoom(region)

    }
    setunitsData(dataApi.filter(majorFilter));
  }, [selectedFilters]);

  // +-+-+-+-+- UseEffects End +-+-+-+-+-



  return (
    <>
      {windowWidth <= 912 ? (
        <div className="bg-[#f2f2f2] md:h-[100vh]">
          <div className="absolute top-2 w-full mx-auto  z-50">


            <Button className="bg-[#45b6ca] rounded-3xl border-none mt-[25%] md:mt-[20%] rounded-" onClick={handleShowModal}>
              Search
            </Button>
            <Modal
              centered
              className="rounded-3xl"
              show={searchModal}
              onHide={handleCloseModal}
            >
              <Container className="bg-white border-2 p-2 md:h-[80px] rounded-3xl md:rounded-3xl  flex flex-col md:flex-row">
                <>
                  {" "}
                  <div className=" md:w-[25%] flex mx-2 flex-col">
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
                      District
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => selectedData(e.target.value, 4)}
                      className="md:ml-2 w-[100%] border-none ay7aga"
                      size="sm"
                    >
                      <option disabled selected>
                        Select a District
                      </option>
                      <option value="all">All</option>
                      {districts?.map((district) => {
                        return <option value={district}>{district}</option>
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
                </>
              </Container>
            </Modal>

          </div>
          <Container
            fluid
            className="p-0 w-[100%] flex flex-col lg:flex-row h-[70%]"
          >
            <Container
              fluid
              className="p-0 mapps g:h-[100vh] w-[100%] md:w-[100%] bg-black "
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
                  <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
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

                  <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
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
                  <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
                    <Form.Label className="md:ml-4 text-xl text-left">
                      District
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => selectedData(e.target.value, 4)}
                      className="md:ml-2 w-[100%] border-none ay7aga"
                      size="sm"
                    >
                      <option disabled selected>
                        Select a District
                      </option>
                      <option value="all">All</option>
                      {districts?.map((district) => {
                        return <option value={district}>{district}</option>
                      })}
                    </Form.Select>
                  </div>
                  <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
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
                  {
                    showResFilter ? (<>
                      <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
                        <Form.Label className="md:ml-4 text-xl text-left">
                          Unit Category
                        </Form.Label>
                        <Form.Select
                          onChange={(e) => selectedData(e.target.value, 5)}
                          className="md:ml-2 w-[100%] border-none ay7aga"
                          size="sm"
                        >
                          <option disabled selected>
                            Select a Category
                          </option>
                          <option value="all">All</option>
                          {unitCategories?.map((unitcategory) => {
                            return <option value={unitcategory}>{unitcategory}</option>
                          })}
                        </Form.Select>
                      </div>
                      <div className={showResFilter ? "md:w-1/6 flex mx-2 flex-col" : "md:w-1/4 flex mx-2 flex-col"}>
                        <Form.Label className="md:ml-4 text-xl text-left">
                          Type
                        </Form.Label>
                        <Form.Select
                          onChange={(e) => selectedData(e.target.value, 6)}
                          className="md:ml-2 w-[100%] border-none ay7aga"
                          size="sm"
                        >
                          <option disabled selected>
                            Select a Type
                          </option>
                          <option value="all">All</option>
                          {resUnitCategories?.map((type) => {
                            return <option value={type}>{type}</option>
                          })}
                        </Form.Select>
                      </div>
                    </>
                    ) : null
                  }
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
