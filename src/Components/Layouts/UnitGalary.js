import React from "react";
import "./layouts.css";

import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ShareToSocial from "./ShareToSocial";


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
      items: 3,
    },
  },
};




function UnitGalary() {
  return (



    <>

      <div className="bg-[#f2f2f2]">

        <div className="  h-[70%]  galaryOfUnits ">
          <Carousel className="mx-auto w-[80%] md:w-[60%] ">


            <div >


              <img className="w-full " src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />

              <p className="legend">Legend 1</p>

            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img className="w-full h-[25%]" src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <ShareToSocial />





      </div>






    </>




  );
}

export default UnitGalary;