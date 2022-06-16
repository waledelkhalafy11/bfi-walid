import React from "react";
import { useState , useEffect} from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import clocation from "../../Assets/icons/counter/maplocation.png";
import agents from "../../Assets/icons/counter/insurance.png";
import happy from "../../Assets/icons/counter/satisfaction.png";
import property from "../../Assets/icons/counter/insurance-(1).png";






function Counter() {





    //  ********* Redux Context *************
    const dataWebPromise = useSelector((state) => state.webReducer);




    //  ********* States  *************
    const [dataWeb, setDataWeb] = useState([]);



    //  ********* UseEffects *************

    useEffect(() => {
      dataWebPromise.then(function (result) {
        setDataWeb(result);

        });
    },[]);

    const icons = [clocation , agents ,happy ,property]

let countersData = dataWeb.counters;
let countDetails = countersData?.map((itm , i )=>{
return (
<div className="col-lg-3  col-md-6  col-sm-6  mb-[50px] lg:mb-0">
  <img  className="mb-[10px] mx-auto w-[60px]" src={icons[i]} alt="" />
  <h3 className="font-[Montserrat] text-white font-black my-0 mx-auto"><CountUp end={itm.num_count} redraw={true}  duration={1}  > 
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}
</CountUp>+</h3>
  <p className="text-white text-center text-[16px] my-0 mx-auto">{itm.count_name}</p>
  </div>
)
})
    return (
<div className="Counter py-[50px]  w-[100%]  mx-auto bg-[#45b6ca]  ">
<Container>
<div className="row  w-[70%]   lg:w-[100%]  my-auto mx-auto ">
{countDetails}
  </div>
  </Container> 
</div>
    )}
    export default Counter;