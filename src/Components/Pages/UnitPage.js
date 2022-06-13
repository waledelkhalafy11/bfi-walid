import React from "react";
import UnitGalary from "../Layouts/UnitGalary";
import Footer from "../Layouts/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../App.js";
import ".././Layouts/UnitGalary";
import kitchen from "../../Assets/icons/unit/kitchen.svg";
import bedroom from "../../Assets/icons/unit/bedroom.svg";
import livingroom from "../../Assets/icons/unit/livingroom.svg";
import bathroom from "../../Assets/icons/unit/bathroom.svg";
import gardenn from "../../Assets/icons/unit/plant-garden.svg";
import garage from "../../Assets/icons/unit/garage.svg";
import elevator from "../../Assets/icons/unit/elevator.svg";
import floors from "../../Assets/icons/unit/floors.svg";
import area from "../../Assets/icons/ListingsCards/size.svg";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";




const UnitPage = () => {

    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state.apiReducer);




    //  ********* States  *************
    const [dataApi, setDataApi] = useState([]);



    //  ********* UseEffects *************

    useEffect(() => {
        dataApiPromise.then(function (result) {
            setDataApi(result);

        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[]);


   
    //  ********* Getting Parameter >> GET request *************
    let { id } = useParams();




    //  ********* Loading *************
    let color = "#45b6ca"
    let type = "spinningBubbles"

    while (!dataApi[0]) {
        return (
            <div className="mx-auto w-[50px] h-[50px] md:w-[100px] md:h-[100px] mt-[45vh] translate-x-[-50%]  ">

                <ReactLoading type={type} color={color} height={100} width={100} />

            </div>


        );
    }

    //  ********* Getting the Unit *************

    let filter_specfic_unit = (item) => {
        if (item.unit.id == id) {
            return item;
        }
    };


    let unitData = dataApi.filter(filter_specfic_unit);
    let unit = unitData[0];



    //  ********* Child Component for unit content*************

    function UnitContent(props) {
        return (
            <div className="flex flex-row mb-3 gap-24 md:gap-3">
                <div className="flex flex-row w-[70%] md:w-[90%]">
                    <img src={props.icon} className=" h-7 w-7  my-auto "></img>

                    <p className=" text-left my-auto text-xl ml-3 md:w-[60%] ">
                        {props.title}
                    </p>
                </div>

                <p className=" my-auto text-xl text-left w-[30%] md:w-[25%]">
                    {props.quantity == null ? "—" : props.quantity}{" "}
                </p>
            </div>
        );
    }
    document.getElementById('bfiTitle').innerHTML = 'BFI | ' + unit.unit.unit_name ;


    return (
        <>
            <div className="bg-[#f2f2f2]">
                <div className="mt-20  pt-10  w-[80%] md:w-[60%] mx-auto   ">
                    <p className=" font-bold mb-2 text-xl md:text-2xl text-left">
                        {unit.unit.unit_name}
                    </p>
                    <a className="text-black" target='_Blank' href={`http://www.google.com/maps/place/${unit.unit.unit_latitude},${unit.unit.unit_longitude}`}  >

                    <div className=" lg:flex-row flex flex-col justify-between">
                        <p className="text-left  mb-3 text-lg md:text=xl">
                            <span className="md:underline underline-offset-1 hover:no-underline cursor-pointer hover:text-[#45b6ca]">
                             
                                {unit.unit.unit_address}
                            </span>
                        </p>
                        <p className="text-[#45b6ca] font-bold text-xl md:text-2xl ">{unit.unit.unit_price.toLocaleString()} EGP </p>
                    </div>
                    </a>
                </div>

                <UnitGalary photos={unit.photos} />
            </div>
            <div className="mb-24 mt-16 w-[70%] md:w-[60%] mx-auto ">
                <p className="text-2xl font-bold text-left ">What this place include</p>
                <div className="flex md:flex-row flex-col  md:gap-36   mt-5 ">
                    <div className="flex flex-col w-[30%]">
                        <UnitContent
                            icon={kitchen}
                            title="kitchen"
                            quantity={unit.props[0].kitchen}
                        />
                        <UnitContent
                            icon={bedroom}
                            title="bed Room"
                            quantity={unit.props[0].bedroom}
                        />
                        <UnitContent
                            icon={livingroom}
                            title="living Room"
                            quantity={unit.props[0].living_room}
                        />
                        <UnitContent
                            icon={bathroom}
                            title="Bath Room"
                            quantity={unit.props[0].bathroom}
                        />
                         <UnitContent
                            icon={area}
                            title="area"
                            quantity={unit.props[0].surface_area  }
                        />
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <UnitContent
                            icon={gardenn}
                            title="Garden"
                            quantity={unit.props[0].garden}
                        />
                        <UnitContent
                            icon={garage}
                            title="Garage"
                            quantity={unit.props[0].garage}
                        />
                        <UnitContent
                            icon={elevator}
                            title="Elevator"
                            quantity={unit.props[0].elevator}
                        />
                        <UnitContent
                            icon={floors}
                            title="Floors"
                            quantity={unit.props[0].floor}
                        />
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
