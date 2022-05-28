import React, { useContext } from "react";
import "./layouts.css";
import { useParams } from "react-router";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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

function UnitGalary(props) {
  const garalyPhotoes = props.photos;

  const galaryimges = [...garalyPhotoes];

  let unitPhotos = galaryimges.map((photo) => {
    return (
      <div className="w-full h-full">
        <img
          className="object-fill h-full"
          src={`http://127.0.0.1:8000${photo.unit_image_url}`}
        />

       
      </div>
    );
  });

  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="  h-[70%]  galaryOfUnits ">
          <Carousel className="mx-auto w-[80%] md:w-[60%] ">
            {unitPhotos}
          </Carousel>
        </div>
        <ShareToSocial />
      </div>
    </>
  );
}

export default UnitGalary;
