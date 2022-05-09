import React from "react";
import UnitGalary from "../Layouts/UnitGalary";
import Footer from "../Layouts/Footer";


import kitchen from "../../Assets/icons/kitchen.svg";
import bedroom from "../../Assets/icons/bedroom.svg";
import livingroom from "../../Assets/icons/livingroom.svg";
import bathroom from "../../Assets/icons/bathroom.svg";
import gardenn from "../../Assets/icons/gardenn.svg";
import garage from "../../Assets/icons/garage.svg";
import elevator from "../../Assets/icons/elevator.svg";
import price from "../../Assets/icons/price.svg";


const UnitPage = () => {


    function UnitContent(props) {
        return (
            <div className="flex flex-row mb-3 gap-24 md:gap-3">

                <div className="flex flex-row w-[70%] md:w-[90%]">

                    <img src={props.icon} className=" h-8 w-8 my-auto "></img>

                    <p className=" text-left my-auto text-xl ml-3 md:w-[60%] ">{props.title}</p>
                </div>

                <p className=" my-auto text-xl text-left w-[30%] md:w-[10%]">7754</p>
            </div>
        );
    }










    return (
        <>

            <div className="bg-[#f2f2f2]">
                <div className="mt-20  pt-10  w-[80%] md:w-[60%] mx-auto   ">
                    <p className=" font-bold mb-2 text-lg md:text-2xl text-left">Newly Refurbished One Bedroom Studio-1</p>
                    <p className="text-left  mb-3">  Abu Al Feda, Cairo Governorate, Egypt</p>
                </div>




                <UnitGalary />





            </div>
            <div className="mb-24 mt-16 w-[70%] md:w-[60%] mx-auto ">
                <p className="text-2xl font-bold text-left ">What this place include</p>
                <div className="flex md:flex-row flex-col  md:gap-36   mt-5 ">
                    <div className="flex flex-col w-[30%]">
                        <UnitContent icon={kitchen} title="kitchen" />
                        <UnitContent icon={bedroom} title="bed Room" />
                        <UnitContent icon={livingroom} title="living Room" />
                        <UnitContent icon={bathroom} title="Bath Room" />



                    </div>
                    <div className="flex flex-col w-[30%]">
                        <UnitContent icon={gardenn} title="Garden" />
                        <UnitContent icon={garage} title="Garage" />
                        <UnitContent icon={elevator} title="Elevator" />
                        <UnitContent icon={price} title="Price" />




                    </div>

                </div>


            </div>
            <div className="w-full bg-[#f2f2f2] py-14 ">
                <div className="w-[60%] mx-auto ">
                    <div className=" text-left   md:w-[80%] w-full ">
                        <p className="text-2xl font-bold  ">Description</p>


                        <div className="text-lg">Located in the heart of the most sought-after neighborhood in Cairo, ZAMALEK, this refurbished Studio apartment is the perfect destination for your holiday, business trip, or long-term accommodation. It also boasts a spacious living room with modern furnishing, a well-equipped kitchen, a fully automatic washing machine, and fine furnishings.</div>

                    </div>


                </div>

            </div>


            <Footer />






        </>
    );
};

export default UnitPage;