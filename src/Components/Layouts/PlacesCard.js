import React from "react";

import placeImg from "../../Assets/imgs/placeimg.jpg";
import { Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom"
import Bedrooms from "../../Assets/icons/ListingsCards/bed.png";
import Bathrooms from "../../Assets/icons/ListingsCards/bath.png";
import Space from "../../Assets/icons/ListingsCards/size.svg";

const PlacesCard = (props) => {
  return (
    <>
      <Container
        fluid
        className="flex  shadow-sm py-[1%] md:py-[2.5%] pl-0 mt-4 rounded-2xl h-fit  sm:h-[40%]  md:h-[40%] lg:h-[30%] bg-white flex-row"
      >
        <Container fluid className=" w-[30%] overflow-hidden ">
        <Link to = {`/unit/${props.id}`}><img className="rounded-xl object-cover h-full w-full" src={props.image}></img></Link> 
        </Container>
        <Container
          fluid
          className=" md:p-2 relative text-left justify-between w-[70%]  "
        >
          <Container  >

            <div className="sm:d-flex justify-between">
            <h3 className="text-[12px] md:text-[25px] font-black">{props.title}</h3>

            {/* <h2 className="text-[10px] md:text-xl text-left  hidden">
              {props.description}
            </h2> */}

            {/* <span className="hidden absolute top-[1%] right-[1%]"><FavoriteBorderIcon /></span> */}
            <h1 className="sm:text-[15px] text-[12px]   my-auto font-medium">{props.city} </h1>
            </div>
           
            <div className="details-icons d-flex bt-3 w-full">
                            <div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
                            <img className="sm:w-[25px] w-[18px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
                            <h6 className="sm:text-[14px] text-[12px]   font-black mt-[12px]">{props.rooms}</h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[18px]  my-auto" src={Bathrooms} alt="bathrooms" />
                            <h6 className="sm:text-[14px] text-[12px]   font-black mt-[12px]">{props.bathrooms}</h6>
                            </div>
                            <div className="Lspace  d-flex opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px]  my-auto " src={Space} alt="Size" />
                            <h6 className="sm:text-[14px] text-[12px]  font-black mt-[14px]">{props.space} m<sup>2</sup></h6>
                            </div>
                            </div>




            {/* <h3 className="text-[6px] md:text-lg text-gray-600"> {props.space} m<sup>2</sup></h3> */}
            <div className="d-flex justify-between lg:relative top-[25px]">
            <OverlayTrigger className="hover:overflow-x-hidden  "
            //  style={{width:'1000px' , background:'black'}}
              placement='top'
              overlay={
                <Tooltip  >
                 {props.description}

                </Tooltip>
              }
            >
              
              <Button className="btn-higlight text-[10px] md:text-[18px]  " variant="success">{props.price} LE</Button>
            
            </OverlayTrigger>
            <Link to ={`/unit/${props.id}`} className="text-white btn-higlight  text-[10px] md:text-[18px] ">Visit Unit</Link></div>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PlacesCard;
