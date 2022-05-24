import React from "react";
import UnitGalary from "../Layouts/UnitGalary";
import Footer from "../Layouts/Footer";
import { useContext , useState ,useEffect} from "react";
import { ApiContext } from "../../ApiContext";
import { useParams } from "react-router";
import '../../App.js'
import '.././Layouts/UnitGalary'

import kitchen from "../../Assets/icons/kitchen.svg";
import bedroom from "../../Assets/icons/bedroom.svg";
import livingroom from "../../Assets/icons/livingroom.svg";
import bathroom from "../../Assets/icons/bathroom.svg";
import gardenn from "../../Assets/icons/gardenn.svg";
import garage from "../../Assets/icons/garage.svg";
import elevator from "../../Assets/icons/elevator.svg";
import price from "../../Assets/icons/price.svg";
import { NavItem } from "react-bootstrap";


const UnitPage = () => {


   

     let {id} = useParams() ;
     

    const dataApi = useContext(ApiContext);

    let filter_specfic_unit = (item) => {
        if (item.unit.id == id ) {return item;}};

    let unitData = dataApi.filter(filter_specfic_unit)


     let unit = unitData[0];




    function UnitContent(props) {
        return (
            <div className="flex flex-row mb-3 gap-24 md:gap-3">

                <div className="flex flex-row w-[70%] md:w-[90%]">

                    <img src={props.icon} className=" h-8 w-8 my-auto "></img>

                    <p className=" text-left my-auto text-xl ml-3 md:w-[60%] ">{props.title}</p>
                </div>

                <p className=" my-auto text-xl text-left w-[30%] md:w-[10%]">{props.quantity == null ? '—' : props.quantity } </p>
            </div>
        );
    }


  







    return (
        <>

            <div className="bg-[#f2f2f2]">
                <div className="mt-20  pt-10  w-[80%] md:w-[60%] mx-auto   ">
                    <p className=" font-bold mb-2 text-lg md:text-2xl text-left">{unit.unit.unit_name}</p>
                    <p className="text-left  mb-3">{unit.unit.unit_address}</p>
                </div>




                <UnitGalary photos={unit.photos} />





            </div>
            <div className="mb-24 mt-16 w-[70%] md:w-[60%] mx-auto ">
                <p className="text-2xl font-bold text-left ">What this place include</p>
                <div className="flex md:flex-row flex-col  md:gap-36   mt-5 ">
                    <div className="flex flex-col w-[30%]">
                        <UnitContent icon={kitchen} title="kitchen" quantity={unit.props[0].kitchen}  />
                        <UnitContent icon={bedroom} title="bed Room" quantity={unit.props[0].bedroom} />
                        <UnitContent icon={livingroom} title="living Room" quantity={unit.props[0].living_room} />
                        <UnitContent icon={bathroom} title="Bath Room" quantity={unit.props[0].bathroom} />



                    </div>
                    <div className="flex flex-col w-[30%]">
                        <UnitContent icon={gardenn} title="Garden" quantity={unit.props[0].garden} />
                        <UnitContent icon={garage} title="Garage" quantity={unit.props[0].garage} />
                        <UnitContent icon={elevator} title="Elevator" quantity={unit.props[0].elevator} />
                        <UnitContent icon={price} title="Floors" quantity={unit.props[0].floor}/>




                    </div>

                </div>


            </div>
            <div className="w-full bg-[#f2f2f2] py-14 ">
                <div className="w-[60%] mx-auto ">
                    <div className=" text-left   md:w-[80%] w-full ">
                        <p className="text-2xl font-bold  ">Description</p>


                        <div className="text-lg">{unit.unit.unit_description}</div>

                    </div>


                </div>

            </div>


            <Footer />






        </>
    );
};

export default UnitPage;