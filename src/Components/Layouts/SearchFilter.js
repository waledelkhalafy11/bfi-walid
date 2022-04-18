import houseIcon from "../../Assets/icons/house-svgrepo-com.svg";
import appartmentIcon from "../../Assets/icons/appartment-svgrepo-com.svg";
import officeIcon from "../../Assets/icons/office-svgrepo-com.svg";
import villaIcon from "../../Assets/icons/villa-svgrepo-com.svg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const SearchFilter = () => {
    const [filterSale, setFilterSale] = useState(true);
    
    return ( 
        <>
        <Container className="static top px-[10%] pb-[2%] md:px-[5%] ">
          <Container className="pt-[10%] md:mt-[17]">
            <ButtonGroup className="mb-2">
              <ToggleButton
                className="m-2 w-24 rounded-full"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={filterSale}
                value="1"
                onChange={(e) => setFilterSale(true)}
              >
                Sales
              </ToggleButton>
              <ToggleButton
                className="m-2 w-24 rounded-full"
                id="toggle-check2"
                type="checkbox"
                variant="outline-primary"
                checked={!filterSale}
                value="2"
                onChange={(e) => setFilterSale(false)}
              >
                Rentals
              </ToggleButton>
            </ButtonGroup>
          </Container>
          <Container className="bg-white border-2 p-2 md:h-[80px] rounded-3xl md:rounded-3xl mt-[3%] md:mt-[1%] flex flex-col md:flex-row">
            {filterSale ? (
              <>
                {" "}
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    Category
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select a Category
                    </option>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    City
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none ay7aga"
                    size="sm"
                  >
                    <option disabled selected>
                      Select a City
                    </option>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    Bedrooms
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select Bedrooms
                    </option>
                    <option>Large select</option>
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
            ) : (
              <>
                {" "}
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    City
                  </Form.Label>
                  <Form.Select
                    id="ay7aga"
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select a City
                    </option>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    Bedrooms
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select Bedrooms
                    </option>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] flex mx-2 flex-col">
                  <Form.Label className="md:ml-4 text-xl text-left">
                    Bathrooms
                  </Form.Label>
                  <Form.Select
                    className="md:ml-2 w-[100%] border-none"
                    size="sm"
                  >
                    <option disabled selected>
                      Select Bathrooms
                    </option>
                    <option>Large select</option>
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
            )}
          </Container>
        </Container>
        </>
     );
}
 
export default SearchFilter;