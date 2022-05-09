import React from "react";
import "./layouts.css";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import { Container } from "react-bootstrap";


import apartment1 from "../../Assets/imgs/listing/1.jpg";
import apartment2 from "../../Assets/imgs/listing/2.jpg";
import apartment3 from "../../Assets/imgs/listing/3.jpg";
import apartment4 from "../../Assets/imgs/listing/4.jpg";


import Bedrooms from "../../Assets/icons/ListingsCards/bed.png";
import Bathrooms from "../../Assets/icons/ListingsCards/bath.png";
import Space from "../../Assets/icons/ListingsCards/size.svg";
import Share from "../../Assets/icons/ListingsCards/share.svg";
import Love from "../../Assets/icons/ListingsCards/heart.svg";
import Add from "../../Assets/icons/ListingsCards/add.svg";
import Location from "../../Assets/icons/ListingsCards/location.png";

const options = {
  margin: 10,
  responsiveClass: false,
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    980: {
      items: 2,
    },

    1200: {
      items: 2,
    },
  },
};

function Listings() {
  return (
    <section className="ListingsCards bg-[#f2f2f2]  py-[50px] ">
      <div className="container max-w-[750px] lg:max-w-[900px]">
        <h2 className="text-center  font-black text-[#45b6ca]">Listings available for sale</h2>
   
        <p className="mx-auto max-w-[550px] mb-5">THese are the latest properties in the Sales category displayed using the latest properties slider shortcode. You control the number of listings.</p>
        <Container>
          <OwlCarousel
            className="slider-items owl-carousel owl-theme "
            {...options}
          >





            {/*------------------------------------------------------ card1------------------------------------------------------------------- */}
            <div className="item max-w-[750px]  h-fit bg-[#f2f2f2] ">
              <div className="cardd  ">
                <div className="image relative">
                  <div className="   overflow-hidden overflow-hidden  w-full h-[300px]">
                  <img
                    src={apartment1}
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
            
             <a className="text-white py-[0px]  " href="#">Abu Al Feda, Cairo Governorate, Egypt</a> 
             
                </div>
                </div>

                </div>

                <div className="card-body  bg-[#ffff] text-right">
                  <h5 className="card-title  text-left">
                    <a
                      className="text-[24px] font-semibold no-underline text-black"
                      href=""
                    >
                      Apartment with subunits
                    </a>
                  </h5>
                  <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from LE 450000</h6>
                  <p className="card-text text-[16px] leading[1.5] text-left">
                    We went down the lane, by the body of the man in black,
                    sodden ...
                </p>

<div className="details-icons d-flex bt-3">
<div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
<img className="w-[25px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">5</h6>
</div>
<div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
<img className="w-[23px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">2</h6>
</div>
<div className="Lspace  d-flex opacity-40 hover:opacity-100">
<img className="w-[18px] mr-[5px]  my-auto " src={Space} alt="Size" />
<h6 className="text-[14px]  font-black mt-[14px]">180 m<sup>2</sup></h6>
</div>
</div>


<hr  className="opacity-10 my-2 "/>
<div className="user d-flex my-auto justify-between">
    <div className="accUser d-flex">
<img  className="w-[30px]  rounded-full mr-3" src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" />
<h6 className="text-[14px]  font-black my-auto">Lora Smith</h6>
    </div>
    <div className="engagment my-auto d-flex  my-auto ">

    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Share} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Love} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Add} alt="share" />
    </div>
</div>  
                </div>
              </div>
            </div>












{/*------------------------------------------------------ card2------------------------------------------------------------------- */}



            <div className="item max-w-[750px]  h-fit bg-[#f2f2f2]">
              <div className="cardd  ">
                <div className="image relative  overflow-hidden   w-full h-[300px]">
                  <img
                    src={apartment2}
                    className="card-img-top  object-cover h-full w-full"
                    alt="1"
                  />
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
            
             <a className="text-white py-[0px]  " href="#">Abu Al Feda, Cairo Governorate, Egypt</a> 
             
                </div>
                </div>

                </div>

                <div className="card-body  bg-[#ffff] text-right">
                  <h5 className="card-title  text-left">
                    <a
                      className="text-[24px] font-semibold no-underline text-black"
                      href=""
                    >
                      Apartment with subunits
                    </a>
                  </h5>
                  <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from LE 450000</h6>
                  <p className="card-text text-[16px] leading[1.5] text-left">
                    We went down the lane, by the body of the man in black,
                    sodden ...
                </p>

<div className="details-icons d-flex bt-3">
<div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
<img className="w-[25px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">5</h6>
</div>
<div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
<img className="w-[23px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">2</h6>
</div>
<div className="Lspace  d-flex opacity-40 hover:opacity-100">
<img className="w-[18px] mr-[5px]  my-auto " src={Space} alt="Size" />
<h6 className="text-[14px]  font-black mt-[14px]">180 m<sup>2</sup></h6>
</div>
</div>


<hr  className="opacity-10 my-2 "/>
<div className="user d-flex my-auto justify-between">
    <div className="accUser d-flex">
<img  className="w-[30px]  rounded-full mr-3" src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" />
<h6 className="text-[14px]  font-black my-auto">Lora Smith</h6>
    </div>
    <div className="engagment my-auto d-flex  my-auto ">

    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Share} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Love} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Add} alt="share" />
    </div>
</div>  
                </div>
              </div>
            </div>











{/*------------------------------------------------------ card3------------------------------------------------------------------- */}





            <div className="item max-w-[750px]  h-fit bg-[#f2f2f2]">
              <div className="cardd  ">
                <div className="image relative  overflow-hidden   w-full h-[300px]">
                  <img
                    src={apartment3}
                    className="card-img-top object-cover h-full w-full "
                    alt="1"
                  />
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
            
             <a className="text-white py-[0px]  " href="#">Abu Al Feda, Cairo Governorate, Egypt</a> 
             
                </div>
                </div>

                </div>

                <div className="card-body  bg-[#ffff] text-right">
                  <h5 className="card-title  text-left">
                    <a
                      className="text-[24px] font-semibold no-underline text-black"
                      href=""
                    >
                      Apartment with subunits
                    </a>
                  </h5>
                  <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from LE 450000</h6>
                  <p className="card-text text-[16px] leading[1.5] text-left">
                    We went down the lane, by the body of the man in black,
                    sodden ...
                </p>

<div className="details-icons d-flex bt-3">
<div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
<img className="w-[25px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">5</h6>
</div>
<div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
<img className="w-[23px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">2</h6>
</div>
<div className="Lspace  d-flex opacity-40 hover:opacity-100">
<img className="w-[18px] mr-[5px]  my-auto " src={Space} alt="Size" />
<h6 className="text-[14px]  font-black mt-[14px]">180 m<sup>2</sup></h6>
</div>
</div>


<hr  className="opacity-10 my-2 "/>
<div className="user d-flex my-auto justify-between">
    <div className="accUser d-flex">
<img  className="w-[30px]  rounded-full mr-3" src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" />
<h6 className="text-[14px]  font-black my-auto">Lora Smith</h6>
    </div>
    <div className="engagment my-auto d-flex  my-auto ">

    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Share} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Love} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Add} alt="share" />
    </div>
</div>  
                </div>
              </div>
            </div>










{/*------------------------------------------------------ card4------------------------------------------------------------------- */}








            <div className="item max-w-[750px]  h-fit bg-[#f2f2f2]">
              <div className="cardd  ">
                <div className="image relative  overflow-hidden   w-full h-[300px]">
                  <img
                    src={apartment4}
                    className="card-img-top object-cover h-full w-full  "
                    alt="1"
                  />
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
            
             <a className="text-white py-[0px]  " href="#">Abu Al Feda, Cairo Governorate, Egypt</a> 
             
                </div>
                </div>

                </div>

                <div className="card-body  bg-[#ffff] text-right">
                  <h5 className="card-title  text-left">
                    <a
                      className="text-[24px] font-semibold no-underline text-black"
                      href=""
                    >
                      Apartment with subunits
                    </a>
                  </h5>
                  <h6 className="text-[#45b6ca] text-left font-black text-[15px] ">from LE 450000</h6>
                  <p className="card-text text-[16px] leading[1.5] text-left">
                    We went down the lane, by the body of the man in black,
                    sodden ...
                </p>

<div className="details-icons d-flex bt-3">
<div className="Lbedrooms  d-flex mr-3 opacity-40 hover:opacity-100" >
<img className="w-[25px] mr-[5px]  my-auto " src={Bedrooms} alt="bedrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">5</h6>
</div>
<div className="Lbathrooms d-flex mr-3 opacity-40 hover:opacity-100">
<img className="w-[23px] mr-[5px]  my-auto" src={Bathrooms} alt="bathrooms" />
<h6 className="text-[16px]  font-black mt-[12px]">2</h6>
</div>
<div className="Lspace  d-flex opacity-40 hover:opacity-100">
<img className="w-[18px] mr-[5px]  my-auto " src={Space} alt="Size" />
<h6 className="text-[14px]  font-black mt-[14px]">180 m<sup>2</sup></h6>
</div>
</div>


<hr  className="opacity-10 my-2 "/>
<div className="user d-flex my-auto justify-between">
    <div className="accUser d-flex">
<img  className="w-[30px]  rounded-full mr-3" src="https://randomuser.me/api/portraits/women/22.jpg" alt="user" />
<h6 className="text-[14px]  font-black my-auto">Lora Smith</h6>
    </div>
    <div className="engagment my-auto d-flex  my-auto ">

    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Share} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Love} alt="share" />
    <img className="w-[22px]  p-[3px] mr-1 opacity-40 hover:opacity-100" src={Add} alt="share" />
    </div>
</div>  
                </div>
              </div>
            </div>


          </OwlCarousel>
        </Container>
        {/* <div className="text-center m-3">
          <a
            className="bot-button no-underline  bg-[#45b6ca] text-white py-[10px] px-[20px] text-[16px] font-normal leading-[36px] my-[0] mx-auto  hover:opacity-80"
            href=""
          >
            VISIT BLOG
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Listings;
