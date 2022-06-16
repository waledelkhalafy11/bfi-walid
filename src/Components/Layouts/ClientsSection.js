import React from "react";
import "./layouts.css";
import themeforest from "../../Assets/icons/themeforest.png";
import audiojungle from "../../Assets/icons/audiojungle.png";
import codecanyon from "../../Assets/icons/codecanyon.png";
import graphicriver from "../../Assets/icons/graphicriver.png";
import photodune from "../../Assets/icons/photodune.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";





const options = {
  margin: 1,
  responsiveClass: false,
  autoplay: true,
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 3,
    },
    980: {
      items: 4,
    },

    1200: {
      items: 5,
    },
  },
};










function ClientSection() {


    //  ********* Redux Context *************
    const dataWebPromise = useSelector((state) => state.webReducer);




    //  ********* States  *************
    const [dataWeb, setDataWeb] = useState([]);



    //  ********* UseEffects *************

    useEffect(() => {
      dataWebPromise.then(function(result) {
        setDataWeb(result);

        });
    },[]);


   


        

      let logos = dataWeb.clients;
      let clients = logos?.map((itm)=>{

        return (
          
          <div className="item w-[fit]  my-[15px] ">
          {/* <div className="flex flex-row slideOfClients"> */}
          <img src={process.env.REACT_APP_DOMAIN + itm.icon_image_url} className=" w-[120px] mx-auto"></img>
          {/* <p className="ml-2">{props.name}</p> */}
        {/* </div> */}
        </div>)
        });
      
  

    return (
      <>
        {/* First Part Of The Footer */}
  
        <div className="   h-fit bg-[#f2f2f2] pb-[5px] md:py-12">
          <div className="h-4"></div>
  
          <h2 className="text-center  font-black">CLIENTS</h2>
          <div className="line  my-0 mx-auto  w-[90px] h-[2px] bg-[#45b6ca] "></div>
  
          {/* <div className="flex  sliderOfClients flex-row  my-[20px] text-[#020100] md:gap-14 mx-auto md:justify-center text-xl md:text-2xl md:font-bold">

            {clients}
          </div> */}
<OwlCarousel
            className="slider-items owl-carousel owl-theme "
            {...options}
          >

{clients}
        

            
          </OwlCarousel>

          </div>
        
  

      </>
    );
  }
  
  
  export default ClientSection;