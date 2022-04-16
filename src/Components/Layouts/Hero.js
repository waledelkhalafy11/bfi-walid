import houseIcon from "../../Assets/icons/house-svgrepo-com.svg";
import appartmentIcon from "../../Assets/icons/appartment-svgrepo-com.svg";
import officeIcon from "../../Assets/icons/office-svgrepo-com.svg";
import villaIcon from "../../Assets/icons/villa-svgrepo-com.svg";
import "../../Assets/Animations/typeWrite";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const Hero = () => {
  const [filterSale, setFilterSale] = useState(true);

  return (
    <>
      <Container fluid className="  p-0 hero-bg min-h-[100vh]">
        <Container fluid className="relative pl-[5%] pt-[15%] md:pt-[10%]">
          <div className="hidden md:block firstLine text-left">
            <h1 className="md:text-[90px] font-[900]">We Got You</h1>
          </div>
          <div className="hidden md:block firstLine text-right absolute left-[7.5%]">
            <h1 id="demo" className="md:text-[90px] text-white font-[900]"></h1>
          </div>
        </Container>
        <Container className="fadeInUp px-[10%] md:px-[5%] ">
          <Container className="pt-[10%] md:mt-[17]">
            <ButtonGroup className="mb-2">
              <ToggleButton
                className="m-2 w-24 rounded-full"
                id="toggle-check"
                type="checkbox"
                variant="outline-light"
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
                variant="outline-light"
                checked={!filterSale}
                value="2"
                onChange={(e) => setFilterSale(false)}
              >
                Rentals
              </ToggleButton>
            </ButtonGroup>
          </Container>
          <Container className="bg-white p-2 md:h-[80px] rounded-3xl md:rounded-full mt-[3%] md:mt-[1%] flex flex-col md:flex-row">
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
          <Container className="text-white p-4 rounded-3xl justify-between align-middle md:rounded-full mt-[3%] md:mt-[10%] flex-wrap flex md:flex-row">

            <div>
              <div className="md:w-[110px] w-12 h-12 mx-4 md:p-4 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                <img className="filter-white" src={houseIcon} />
              </div>
              Houses
            </div>
            <div>
              <div className="md:w-[110px] w-12 h-12 mx-4 md:p-4 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                <img className="filter-white" src={appartmentIcon} />
              </div>
              Appartment
            </div>
            <div>
              <div className="md:w-[110px] w-12 h-12 mx-4 md:p-4 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                <img className="filter-white" src={officeIcon} />
              </div>
              Ofices
            </div>
            <div>
              <div className="md:w-[110px] w-12 h-12 mx-4 md:p-4 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                <img className="filter-white" src={villaIcon} />
              </div>
              Villas
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
