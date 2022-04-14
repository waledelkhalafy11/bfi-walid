import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
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
      <Container fluid className="  p-0 hero-bg h-[100vh]">
        <Container className="fadeInUp px-[10%] md:px-[5%] ">
          <Container className="pt-[30%] md:mt-[17]">
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
                    <option disabled selected>Select a Category</option>
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
                    <option disabled selected>Select a City</option>
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
                   <option disabled selected>Select Bedrooms</option>
                   <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                  <Button
                    className="md:ml-2 rounded-full w-[100%] border-none"
                    size="lg"
                  >
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
                  <option disabled selected>Select a City</option>
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
                    <option disabled selected>Select Bedrooms</option>
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
                    <option disabled selected>Select Bathrooms</option>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                  </Form.Select>
                </div>
                <div className="md:w-[25%] p-2 flex mx-2 flex-col">
                  <Button
                    className="md:ml-2 rounded-full w-[100%] border-none"
                    size="lg"
                  >
                    Search
                  </Button>
                </div>
              </>
            )}
          </Container>
          <Container className="text-white p-4 rounded-3xl justify-between align-middle md:rounded-full mt-[3%] md:mt-[10%] flex-wrap flex md:flex-row">
                <div>
                <div className="md:w-[110px] w-12 h-12 mx-4 p-2 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                    <GiteOutlinedIcon className='md:text-[5rem] '/></div>Houses
                </div>
                <div>
                <div className="md:w-[110px] w-12 h-12 mx-4 p-2 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                <ApartmentOutlinedIcon className='md:text-[5rem] '/></div>Appartment
                </div>
                <div>
                <div className="md:w-[110px] w-12 h-12 mx-4 p-2 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]">
                    <MeetingRoomOutlinedIcon  className='md:text-[5rem] '/></div>Ofices
                </div>
                <div>
                <div className="md:w-[110px] w-12 h-12 mx-4 p-2 my-2 md:m-2 md:h-[110px] rounded-full bg-[#0000006b]"> 
                <VillaOutlinedIcon className='md:text-[5rem] '/></div>Villas
                </div>
               
                
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
