import React from "react";
import apartment1 from "../../Assets/imgs/listing/1.jpg";
import Bedrooms from "../../Assets/icons/ListingsCards/bed.png";
import Bathrooms from "../../Assets/icons/ListingsCards/bath.png";
import Space from "../../Assets/icons/ListingsCards/size.svg";
import Share from "../../Assets/icons/ListingsCards/share.svg";

import Location from "../../Assets/icons/ListingsCards/location.png";




// Abu Al Feda, Cairo Governorate, Egypt
//Apartment with subunits
// title,price,space,rooms,bathrooms,address
function Cards(props) {
 

    
  return (
 <>


    <div className="col-lg-4 col-md-6">
            <div className="item w-[400px]  h-fit bg-[#f2f2f2] ">
                <div className="cardd">
                        <div className="image relative">
                            <div className="overflow-hidden  w-full h-[300px]">
                                <img src={props.image} className="card-img-top  object-cover h-full w-full" alt="1"/>

                            </div>
                        <div className="absolute top-[20px] right-5">
                            <div className="text-[12px]  ">
                                <a className="text-white py-[1px] px-[15px] bg-[red] text-[15px] rounded-[5px] " href="#">SOLD</a> 
                            </div>
                        </div>
                                    <div className="absolute bottom-[10px] left-5">
                                        <div className="text-[12px]  d-flex">
                                            <img className="w-[10px] h-[10px] my-auto mr-[2px]" src={Location} alt="location" />
                                            <a className="text-white py-[0px]  " href="#">s</a> 
                                        </div>
                                    </div>
                        </div>
                    <div className="card-body  bg-[#ffff] text-right">
                            <h5 className="card-title  text-left">
                            <a className="text-[24px] font-semibold no-underline text-black" href="">
                            {props.title}</a>
                            </h5>
                            <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from {props.price} LE</h6>
                                            
                    <div className="d-flex justify-betweem">
                            <div className="details-icons d-flex bt-3 w-full">
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
                            <h6 className="text-[14px]  font-black mt-[14px]">{props.space} m<sup>2</sup></h6>
                            </div>
                            </div>

                            <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Share} alt="share" />
                    </div>
                </div>
                </div>
            </div>
        </div>
 </>
  )
}

export default Cards;
