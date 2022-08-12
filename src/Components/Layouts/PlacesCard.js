import React from "react";

import placeImg from "../../Assets/imgs/placeimg.jpg";
import { Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom"
import Bedrooms from "../../Assets/icons/ListingsCards/bed.png";
import Bathrooms from "../../Assets/icons/ListingsCards/bath.png";
import Space from "../../Assets/icons/ListingsCards/size.svg";
import kitchen from "../../Assets/icons/unit/kitchen.svg";
import livingroom from "../../Assets/icons/unit/livingroom.svg";
import gardenn from "../../Assets/icons/unit/plant-garden.svg";
import garage from "../../Assets/icons/unit/garage.svg";
import elevator from "../../Assets/icons/unit/elevator.svg";
import floors from "../../Assets/icons/unit/floors.svg";
import price from "../../Assets/icons/price-tag.svg";
import placeholder from "../../Assets/icons/placeholderMap.svg";



const PlacesCard = (props) => {
  return (
    <>
      <Container
        fluid
        className="flex  shadow-sm py-[1%] md:py-[2.5%] pl-0 mt-4 rounded-2xl h-fit   bg-white flex-row"
      >
        <Container fluid className=" w-[30%] overflow-hidden ">
        <Link to = {`/unit/${props.id}`}><img className="rounded-xl object-cover h-full w-full" src={props.image}></img></Link> 
        </Container>
        <Container
          fluid
          className=" md:p-2 relative text-left justify-between w-[70%]  "
        >
          <Container  >

            <div className="sm:d-flex md:flex justify-between">
            <h3 className="text-[12px] md:text-[25px] font-black">{props.title}</h3>

            {/* <h2 className="text-[10px] md:text-xl text-left  hidden">
              {props.description}
            </h2> */}

            {/* <span className="hidden absolute top-[1%] right-[1%]"><FavoriteBorderIcon /></span> */}
            <h1 className="sm:text-[15px] md:text-[18px] text-[11px]  my-auto font-bold"><span className="text-[#45b6ca]">{props.resCategory ? props.resCategory + ' ' + props.unitCategory : props.category } </span>
            <img className="sm:w-[25px] w-[15px] inline mr-[5px]  my-auto " src={placeholder} alt="Size" /> {props.location} </h1>
            </div>
           
            <div className="details-icons flex flex-wrap bt-3 w-full">
                            <div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
                            <h6 className="sm:text-[14px] text-[10px]   font-black mt-[12px]">{props.rooms}</h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
                            <h6 className="sm:text-[14px] text-[10px]   font-black mt-[12px]">{props.bathrooms}</h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={Space} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.space} m<sup>2</sup></h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={kitchen} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.kitchen} </h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={livingroom} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.living_room} </h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={gardenn} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.garden} </h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={garage} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.garage} </h6>
                            </div>
                            <div className="Lbathrooms d-flex mr-3 opacity-40 hover:my-autoopacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={elevator} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.elevator} </h6>
                            </div>
                            <div className="Lbedrooms   d-flex opacity-40 hover:opacity-100">
                            <img className="sm:w-[25px] w-[15px] mr-[5px]  my-auto " src={floors} alt="Size" />
                            <h6 className="sm:text-[14px] text-[10px]  font-black mt-[14px]">{props.floor} </h6>
                            </div>
              </div>





            {/* <h3 className="text-[6px] md:text-lg text-gray-600"> {props.space} m<sup>2</sup></h3> */}
            <div className="d-flex justify-between lg:relative md:top-[25px]">
            <OverlayTrigger className="hover:overflow-x-hidden  "
            //  style={{width:'1000px' , background:'black'}}
              placement='top'
              overlay={
                <Tooltip  >
                 {props.description}
                </Tooltip>
              }
            >
              
              <Button className="btn-higlight h-7 sm:h-12 text-[8px] md:text-[18px] my-[10px] " > 
              <img className="sm:w-[25px] w-[10px] inline mr-[5px]  my-auto  " src={price} alt="Size" />

              {props.price.toLocaleString()} EGP</Button>
            
            </OverlayTrigger>
            <Link to ={`/unit/${props.id}`} className="btn-higlight1 text-[10px] my-auto md:text-[18px]  hover:text-white hover:opacity-80">Read More</Link></div>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PlacesCard;
