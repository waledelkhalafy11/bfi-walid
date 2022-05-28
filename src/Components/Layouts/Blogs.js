import React, { useState , useEffect } from "react";
import "./layouts.css";
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import { Container } from "react-bootstrap";
import CardWhatsNew from "./CardWhatsNew";
import { Link } from "react-router-dom";
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



  const Blog = () => {

    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state);




    //  ********* States  *************
    const [dataApi, setDataApi] = useState([]);

    const [dataApiLenth, setDataApiLenth] = useState([]);


    //  ********* UseEffects *************

    useEffect(() => {
        dataApiPromise.then(function (result) {
            setDataApi(result);
        });
    });

    useEffect(() => {
      setDataApiLenth(dataApi.length)
  },[dataApi]);


    // ==========> api condition



    let BlogData  = [];
    let i;
    for(i = 0; i < dataApi.length; i++){
      if(i >= (dataApi.length - 4) || i > dataApi.length){
        BlogData.push(dataApi[i]);
  


      }
    }



    let blogFilter = BlogData.map(itm => {
      return (
        <CardWhatsNew 
            title = {itm.unit.unit_name}
            description = {itm.unit.unit_description}
            date = {itm.unit.updated_at}
            image={`http://127.0.0.1:8000${itm.photos[0].unit_image_url}`}
            id= {itm.unit.id}
    />
      )
    })


  return (
    <section className="blog bg-[#f2f2f2] py-[50px] ">
      <div className="container max-w-[1170px]">
        <h2 className="text-center  font-black">BLOG</h2>
        <div className="line mb-5 my-0 mx-auto  w-[90px] h-[2px] bg-[#45b6ca] "></div>

        <Container>
          <OwlCarousel
            className="slider-items owl-carousel owl-theme "
            {...options}
          >

          {blogFilter}

            
          </OwlCarousel>
        </Container>
        <div className="text-center m-3">
          <Link
            className="bot-button no-underline  bg-[#45b6ca] text-white py-[10px] px-[20px] text-[16px] font-normal leading-[36px] my-[0] mx-auto  hover:opacity-80"
            to="/Blog"
          >
            VISIT BLOG
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
