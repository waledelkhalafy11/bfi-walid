import GlMap from "../Layouts/GlMap";
import SearchFilter from "../Layouts/SearchFilter";
import PlacesCard from "../Layouts/PlacesCard";
import { ApiContext } from "../../ApiContext";
import { Container } from "react-bootstrap";
import { useEffect, useState , useContext } from "react";
import SwipeableEdgeDrawer from '../Layouts/Swibable'

const Search = () => {

  let filterByVilla = (item) => {
    if (item.unit.unit_category === "Villa") {
      return item;
    }
  };
  let filterByAppartmant = (item) => {
    if (item.unit.unit_category === "Appartment") {
      return item;
    }
  };
  let filterByOffice = (item) => {
    if (item.unit.unit_category === "Office") {
      return item;
    }
  };
  let filterByHouse = (item) => {
    if (item.unit.unit_category === "House") {
      return item;
    }
  };

  
  const dataApi = useContext(ApiContext);
  
  const [unitsData , setunitsData ] = useState(dataApi)
  let after_Villa_filter = dataApi.filter(filterByVilla);
  let after_Appartmant_filter = dataApi.filter(filterByAppartmant);
  let after_Office_filter = dataApi.filter(filterByOffice);
  let after_House_filter = dataApi.filter(filterByHouse);

  let cardDara = dataApi.map((itm) => {
    return (
      <PlacesCard
        key = {itm.unit.id}
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
  

    
    const windowWidth = window.innerWidth ;
   
  return (
    <>
      
      {windowWidth <= 768 ? <div className="bg-[#f2f2f2] md:h-[100vh]">
        <Container className="absolute" >
          <SearchFilter />
        </Container><Container
          fluid
          className="p-0 w-[100%] flex flex-col lg:flex-row h-[70%]"
        >
        
          <Container
            fluid
            className="p-0 mapps g:h-[100vh] w-[100%] md:w-[70%] bg-black "
          >
            <GlMap />
          </Container>
          <SwipeableEdgeDrawer />
        </Container> 
        </div>
        
        :<div className="bg-[#f2f2f2] md:h-[100vh]">
        <Container className="" >
          <SearchFilter />
        </Container> <Container
          fluid
          className="p-0 w-[100%] flex flex-col lg:flex-row h-[70%]"
        >
          <Container fluid className="w-[100] md:w-[60%] placeCardss overflow-y-scroll md:max-h-[100%] px-3 py-">
            {cardDara}
          </Container>
          <Container
            fluid
            className="p-0 mapps g:h-[70vh] w-[100%] md:w-[70%] bg-black "
          >
            <GlMap />
          </Container>
        </Container>
      </div>
        }
    </>
  );
};

export default Search;
