import React from "react";
import UnitGalary from "../Layouts/UnitGalary";

import kitchen from "../../Assets/icons/kitchen.png";
import bedroom from "../../Assets/icons/bedroom.png";
import bathroom from "../../Assets/icons/bathroom.png";
import livingroom from "../../Assets/icons/livingroom.png";
import { useCallback } from 'react';



import ShareToSocial from "../Layouts/ShareToSocial";


const UnitPage = () => {


    function UnitContent(props) {
        return (
            <div className="flex flex-row mb-3 gap-24 md:gap-5">

                <div className="flex flex-row w-[70%] md:w-[80%]">

                    <img src={props.img} className=" h-12 "></img>
                    <p className=" text-left my-auto text-xl ml-3">{props.title}</p>
                </div>

                <p className=" my-auto text-xl text-left w-[30%] md:w-[20%]">5</p>
            </div>
        );
    }












    return (
        <>


            <div className="mt-24  w-[80%] md:w-[60%] mx-auto  ">
                <p className="font-bold text-lg md:text-2xl text-left">Newly Refurbished One Bedroom Studio-1</p>
                <p className="text-left ">⭐4.56  Abu Al Feda, Cairo Governorate, Egypt</p>
            </div>




            <UnitGalary />



            <div className="mb-24 mt-24 w-[70%] md:w-[60%] mx-auto ">
                <p className="text-2xl font-bold text-left ">What this place include</p>
                <div className="flex flex-row gap-20 md:gap-40  mt-5 overflow-x-auto">
                    <div className="flex flex-col">
                        <UnitContent img={kitchen} title="kitchen" />
                        <UnitContent img={bedroom} title="bed room" />
                        <UnitContent img={livingroom} title="living room" />
                        <UnitContent img={bathroom} title="Bath Room" />



                    </div>
                    <div className="flex flex-col">
                        <UnitContent img={livingroom} title="kitchen" />
                        <UnitContent img={livingroom} title="kitchen" />
                        <UnitContent img={livingroom} title="kitchen" />
                        <UnitContent img={livingroom} title="kitchen" />




                    </div>

                </div>


            </div>

            <div className="w-[60%] mx-auto ">
                <div className=" text-left  mb-20 md:w-[80%] w-full ">
                    <p className="text-2xl font-bold  ">Description</p>


                    <div className="text-lg">Located in the heart of the most sought-after neighborhood in Cairo, ZAMALEK, this refurbished Studio apartment is the perfect destination for your holiday, business trip, or long-term accommodation. It also boasts a spacious living room with modern furnishing, a well-equipped kitchen, a fully automatic washing machine, and fine furnishings.</div>

                </div>


            </div>








        </>
    );
};

export default UnitPage;