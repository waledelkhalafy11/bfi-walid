
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const SearchFilter = ({ categoriess , regions ,  vehicle, sendDataToParent }) => {
//     onTrigger = (event) => {
//     props.parentCallback(event.target.value);
//     event.preventDefault();
// }
const [selectedRegion, setSelectedRegion] = useState();
const [selectedCategory, setSelectedCategory] = useState();
const [selectedCity, setSelectedCity] = useState();

    
    return ( 
        <>
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
                    onChange={(e)=>sendDataToParent(e.target.value , 1)}
                  >
                    <option disabled selected>
                      Select a Region
                    </option>
                    <option value="all" >
                      All
                    </option>
                    {regions.map(region=>{
                     return(<option value={region} >
                     {region}
                   </option>)
                      
                    })}
                   
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    Category
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none ay7aga"
                    size="sm"
                  >
                    <option disabled selected>
                      Select a Category
                    </option>
                    <option value="all" >
                      All
                    </option>
                    {/* {categoriess.map(ii=>{
                     return(<option value={ii} >
                     {ii}
                   </option>)
                    })} */}
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                  City
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select City
                    </option>
                    <option value="all" >
                      All
                    </option>
                    <option>Large select</option>
                    <option>Large select</option>
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
        </>
     );
}
 
export default SearchFilter;