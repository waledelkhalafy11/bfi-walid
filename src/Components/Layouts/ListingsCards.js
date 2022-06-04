import React from "react";
import "./layouts.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

import Bedrooms from "../../Assets/icons/ListingsCards/bed.png";
import Bathrooms from "../../Assets/icons/ListingsCards/bath.png";
import Space from "../../Assets/icons/ListingsCards/size.svg";

import Location from "../../Assets/icons/ListingsCards/location.png";
import { Link } from "react-router-dom";











// let filterPrice = props.price;



function Listings(props) {

  return (
    <section className="ListingsCards bg-[#f2f2f2]  py-[50px] ">
      {/* ------------------------------------------ Card ----------------------------------------------------------- */}
     
      <div className="item max-w-[750px]  h-fit bg-[#f2f2f2] ">

        <div className="cardd  ">
        <Link to={`/unit/${props.id}`}>
          <div className="image relative">
            <div className="   overflow-hidden  w-full h-[300px]">
       
              <img
                src={props.image}
                className="card-img-top  object-cover h-full w-full"
                alt="1"
              /></div>
            <div className="absolute top-[20px] right-5">
              <div className="text-[12px]  ">
                <a className="text-white py-[0px] px-[10px]  bg-[#45b6ca] mr-2 rounded-[5px]" href="#">Sales</a>
                <a className="text-white py-[0px] px-[10px]  bg-[red]          rounded-[5px] " href="#">New Offer</a>
              </div>
            </div>

            <div className="absolute top-[20px] left-5">
              <div className="text-[12px]  ">
                <a className="text-white py-[0px] px-[10px]  bg-[#eebf87] mr-2 rounded-[5px]" href="#">Featured</a>

              </div>
            </div>

            <div className="absolute bottom-[10px] left-5">
              <div className="text-[12px]  d-flex">
                <img className="w-[10px] h-[10px] my-auto mr-[2px]" src={Location} alt="location" />

                <a className="text-white py-[0px]  " href="#">{props.address}</a>

              </div>
            </div>

          </div>
          </Link>
          <div className="card-body  bg-[#ffff] text-right">
          <Link to={`/unit/${props.id}`}>
            <h5 className="card-title  text-left">
              <a
                className="text-[24px] font-semibold no-underline text-black"
                href=""
              >
                {props.title}
              </a>
            </h5>
             
            <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from {props.price.toLocaleString()} EGP</h6>
            </Link>
            <div className="details-icons d-flex bt-3">
              <div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
                <img className="w-[25px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
                <h6 className="text-[16px]  font-black mt-[12px]">{props.rooms}</h6>
              </div>
              <div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
                <img className="w-[23px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
                <h6 className="text-[16px]  font-black mt-[12px]">{props.bathrooms}</h6>
              </div>
              <div className="Lspace  d-flex opacity-40 hover:opacity-100">
                <img className="w-[18px] mr-[5px]  my-auto " src={Space} alt="Size" />
                <h6 className="text-[14px]  font-black mt-[14px]"> {props.space}  m<sup>2</sup></h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    
    </section>
  );
}

export default Listings;
