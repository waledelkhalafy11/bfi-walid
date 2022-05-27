import React from "react";

import placeImg from "../../Assets/imgs/placeimg.jpg";
import { Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const PlacesCard = (props) => {
  return (
    <>
      <Container
        fluid
        className="flex shadow-sm py-[1%] md:py-[2.5%] pl-0 mt-4 rounded-2xl h-[20%]  md:h-[30%] bg-white flex-row"
      >
        <Container fluid className=" w-[30%] overflow-hidden ">
          <img className="rounded-xl object-cover h-full w-full" src={props.image}></img>
        </Container>
        <Container
          fluid
          className=" md:p-2 text-left justify-between w-[70%]  "
        >
          <Container className="relative" >
            <h3 className="text-[12px] md:text-lg text-gray-600">{props.title}</h3>

            <h2 className="text-[10px] md:text-xl text-left">
              {props.description}
            </h2>

            <span className="hidden absolute top-[1%] right-[1%]"><FavoriteBorderIcon /></span>
            <h3 className="text-[6px] md:text-lg text-gray-600">3 bedrooms , 1 bathroom , 110m</h3>
            <OverlayTrigger className="hover:overflow-x-hidden"

              placement='top'
              overlay={
                <Tooltip >
                 {props.description}

                </Tooltip>
              }
            >
              <Button className="btn-higlight" variant="success">{props.price} LE</Button>
            </OverlayTrigger>
            
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PlacesCard;
