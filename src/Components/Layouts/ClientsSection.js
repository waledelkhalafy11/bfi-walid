import React from "react";
import "./layouts.css";
import themeforest from "../../Assets/icons/themeforest.png";
import audiojungle from "../../Assets/icons/audiojungle.png";
import codecanyon from "../../Assets/icons/codecanyon.png";
import graphicriver from "../../Assets/icons/graphicriver.png";
import photodune from "../../Assets/icons/photodune.png";



function ClientSection() {
    function Client(props) {
      return (
        <div className="flex flex-row slideOfClients">
          <img src={props.img} className="w-8 h-8"></img>
          <p className="ml-2">{props.name}</p>
        </div>
      );
    }
  

    return (
      <>
        {/* First Part Of The Footer */}
  
        <div className="   h-auto bg-[#f2f2f2] md:py-12">
          <div className="h-4"></div>
  
          <h2 className="text-center  font-black">CLIENTS</h2>
          <div className="line mb-5 my-0 mx-auto  w-[90px] h-[2px] bg-[#45b6ca] "></div>
  
          <div className="flex  sliderOfClients flex-row   md:mt-8 text-[#020100] md:gap-14 mx-auto md:justify-center text-xl md:text-2xl md:font-bold">
            <Client img={themeforest} name="themeforest" />
            <Client img={audiojungle} name="audiojungle" />
            <Client img={codecanyon} name="codecanyon" />
            <Client img={graphicriver} name="graphicriver" />
            <Client img={photodune} name="photodune" />
          </div>
        </div>
  

      </>
    );
  }
  
  
  export default ClientSection;