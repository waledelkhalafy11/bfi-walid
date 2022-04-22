import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Container } from "react-bootstrap";

import clocation from "../../Assets/icons/counter/maplocation.png";
import agents from "../../Assets/icons/counter/insurance.png";
import happy from "../../Assets/icons/counter/satisfaction.png";
import property from "../../Assets/icons/counter/insurance-(1).png";
function Counter() {
    return (
<div className="Counter py-[50px]  w-[100%]  mx-auto bg-[#45b6ca]  ">

<Container>


<div className="row  w-[70%]   lg:w-[100%]  my-auto mx-auto ">



  {/*----------------------- first------------------- */}
<div className="col-lg-3  col-md-6  col-sm-6  mb-[50px] lg:mb-0 ">
  <img  className="mb-[10px] mx-auto w-[60px]" src={clocation} alt="" />
  <h3 className="font-[Montserrat] text-white font-black my-0 mx-auto"><CountUp end={200} redraw={true}    duration={1}  >
  
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}
</CountUp>+</h3>
  <p className="text-white text-white  text-center text-[16px] my-0 mx-auto">Property Location</p>
  </div>
  




  {/*----------------------- second ------------------- */}
  <div className="col-lg-3 col-md-6  col-sm-6 mb-[50px] lg:mb-0">
  <img  className="mb-[10px] mx-auto w-[60px]" src={agents} alt="" />
  <h3 className="font-[Montserrat] font-black text-white my-0 mx-auto"><CountUp end={30} redraw={true}    duration={1}  >
  
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}</CountUp>+</h3>
  <p className="text-white text-center text-[16px] my-0 mx-auto">Professionals Agents</p>
  </div>



{/*----------------------- Third------------------- */}
<div className="col-lg-3  col-md-6  col-sm-6 mb-[50px] lg:mb-0">
  <img  className="mb-[10px] mx-auto w-[60px]" src={happy} alt="" />
  <h3 className=" font-[Montserrat] font-black text-white my-0 mx-auto"><CountUp end={1760} redraw={true}    duration={1}  >
  
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}</CountUp>+</h3>
  <p className="text-white text-center  text-[16px] my-0 mx-auto">Happy clients</p>
  </div>

{/*----------------------- Force ------------------- */}
<div className="col-lg-3  col-md-6  col-sm-6  ">
  <img  className="mb-[10px] mx-auto w-[60px]" src={property} alt="" />
  <h3 className="font-[Montserrat] font-black text-white my-0 mx-auto"><CountUp end={42} redraw={true}    duration={1}  >
  
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}</CountUp>+</h3>
  <p className="text-white text-center text-[16px] my-0 mx-auto">Property For sale</p>
  </div>
  </div>


 


  </Container>
   
</div>






    )}



    export default Counter;