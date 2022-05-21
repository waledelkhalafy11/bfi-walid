import GlMap from "../Layouts/GlMap";
import SearchFilter from "../Layouts/SearchFilter";
import PlacesCard from "../Layouts/PlacesCard";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import SwipeableEdgeDrawer from '../Layouts/Swibable'

const Search = () => {
    
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
          <SwipeableEdgeDrawer/>
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
            <PlacesCard />
            <PlacesCard />
            <PlacesCard />
            <PlacesCard />
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
