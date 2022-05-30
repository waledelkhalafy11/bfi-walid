import React from "react";

import placeImg from "../../Assets/imgs/placeimg.jpg";
import { Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom"


const PlacesCard = (props) => {
  return (
    <>
      <Container
        fluid
        className="flex  shadow-sm py-[1%] md:py-[2.5%] pl-0 mt-4 rounded-2xl h-[20%]  md:h-[30%] bg-white flex-row"
      >
        <Container fluid className=" w-[30%] overflow-hidden ">
        <Link to = {`/unit/${props.id}`}><img className="rounded-xl object-cover h-full w-full" src={props.image}></img></Link> 
        </Container>
        <Container
          fluid
          className=" md:p-2 relative text-left justify-between w-[70%]  "
        >
          <Container  >
            <h3 className="text-[12px] md:text-[25px] font-black">{props.title}</h3>

            <h2 className="text-[10px] md:text-xl text-left  hidden">
              {props.description}
            </h2>

            <span className="hidden absolute top-[1%] right-[1%]"><FavoriteBorderIcon /></span>
            <h3 className="text-[6px] md:text-lg text-gray-600">{props.city} , {props.space} m<sup>2</sup></h3>
            <OverlayTrigger className="hover:overflow-x-hidden  "
            //  style={{width:'1000px' , background:'black'}}
              placement='top'
              overlay={
                <Tooltip  >
                 {props.description}

                </Tooltip>
              }
            >
              <Button className="btn-higlight text-[10px] md:text-[18px] absolute  bottom-[0px] " variant="success">{props.price} LE</Button>
            </OverlayTrigger>
            
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PlacesCard;
