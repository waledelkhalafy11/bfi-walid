import React from "react";
import UnitGalary from "../Layouts/UnitGalary";
import Footer from "../Layouts/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../App.js";
import ".././Layouts/UnitGalary";
import duplex from "../../Assets/imgs/features/duplex.jpg";
import duplex2 from "../../Assets/imgs/features/duplex2.jpg";
import twinhouse from "../../Assets/imgs/features/twinhouse.jpg";
import twinhouse2 from "../../Assets/imgs/features/twinhouse2.jpg";
import townhouse from "../../Assets/imgs/features/townhouse.jpg";
import townhouse2 from "../../Assets/imgs/features/townhouse2.jpg";
import penthouse from "../../Assets/imgs/features/penthouse.jpg";
import penthouse2 from "../../Assets/imgs/features/penthouse2.jpg";
import loft from "../../Assets/imgs/features/loft.jpg";
import loft2 from "../../Assets/imgs/features/loft2.jpg";
import chalet from "../../Assets/imgs/features/chalet.jpg";
import chalet2 from "../../Assets/imgs/features/chalet2.jpg";
import onestory from "../../Assets/imgs/features/onestory.jpg";
import onestory2 from "../../Assets/imgs/features/onestory2.jpg";
import apartment from "../../Assets/imgs/features/apartment.jpg";
import apartment2 from "../../Assets/imgs/features/apartment2.jpg";
import standalone from "../../Assets/imgs/features/standalone.jpg";
import standalone2 from "../../Assets/imgs/features/standalone2.jpg";

import ReactLoading from "react-loading";




const UnitDescriptionPage = () => {




    //  ********* Getting Parameter >> GET request *************
    let { id } = useParams();




    function UnitDescription(props) {
        return (

            <div>
                <div className="bg-[#f2f2f2]">
                    <div className="mt-20  pt-10  w-[80%] md:w-[80%] mx-auto   ">



                        <div className="w-full d-flex flex-col md:flex-row mx-auto mt-10 md:mt-20   justify-between  contactUsResponsive">


                            <div className="md:w-[50%] md:h-[350px] overflow-hidden  ">
                                <img
                                    className="mx-auto  rounded-md  w-[90%] h-full object-cover"
                                    src={props.img1}
                                ></img>
                            </div>

                            <div className="md:w-[50%] md:h-[350px] overflow-hidden  ">
                                <img
                                    className="mx-auto  rounded-md w-[90%] h-full  object-cover"
                                    src={props.img2}
                                ></img>
                            </div>



                        </div>



                    </div>


                </div>

                <div className="w-full bg-[#f2f2f2] py-14 ">
                    <div className="w-[70%] mx-auto mt-16">
                        <div className=" text-left   md:w-[80%] w-full ">
                            <p className="text-3xl font-bold  ">What is  {props.type} ?</p>

                            <div className="text-xl">{props.description}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }






    return (
        <>

            {


                id == "duplex" ?

                    (

                        <UnitDescription
                            type="a duplex"
                            description="A duplex is a multi-family home that has two units in the same building. These two units always share a common wall, but the floor plan can vary. Units can be arranged either side by side or stacked on top of one another, each occupying an entire floor or two of the building.
                                        Each unit has a separate entrance and there is no interior connection between the two units. If there is outdoor space on the lot, the residents of the two units must share it, or it will be partitioned.
                                        A duplex building has a single owner, who may or may not live in one of the two units. The owner of the duplex rents out either one or both units to tenants.
                                        Triplex and fourplex buildings are similar types of multi-family housing, with three and four units within them respectively."
                            img1={duplex}
                            img2={duplex2}
                        />

                    )


                    : id == "twinhouse" ?


                        (
                            <UnitDescription
                                type="a twinhouse"
                                description="Twin houses are simply two homes on one plot of land, with a wall and fence separating them. Both twin houses have their own private gardens, with side access to the garden usually available , One neighbor  More sun  Larger gardens comparing with Townhouse "
                                img1={twinhouse}
                                img2={twinhouse2}
                            />
                        )



                        : id == "townhouse" ?


                            (

                                <UnitDescription

                                    type="a townhouse"

                                    description="Townhouses share the same plot of land with several neighbours (sometimes up to 6!) and typically only have a backyard with no side access."


                                    img1={townhouse}

                                    img2={townhouse2}


                                />
                            ) 




                            
                    : id == "penthouse" ?


                    (
                        <UnitDescription
                        type="a penthouse"
                        description="A penthouse is an apartment or unit on the highest floor of an apartment building, condominium, hotel or tower. Penthouses are typically differentiated from other apartments by luxury features. The term 'penthouse' originally referred, and sometimes still does refer, to a separate smaller 'house' that was constructed on the roof of an apartment building."
                        img1={penthouse}
                        img2={penthouse2}
                    />
                    )



                                                
                    : id == "loft" ?


                    (
                        <UnitDescription
                        type="a loft"
                        description="A loft is a building's upper storey or elevated area in a room directly under the roof, or just an attic: a storage space under the roof usually accessed by a ladder. "
                        img1={loft}
                        img2={loft2}
                    />
                    )



                    : id == "chalet" ?


                    (
                        <UnitDescription
                        type="a chalet"
                        description="Chalet is a small cabin or house used by holidaymakers, forming a unit within a holiday complex."
                        img1={chalet}
                        img2={chalet2}
                    />
                    )


                    : id == "onestory" ?


                    (
                        <UnitDescription
                        type="the One story"
                        description="Thinking about building your dream house? “One-story homes are simplest to design and thus less expensive to design,” explains Rachel Preston Prinz, founding director of Archinia and Architecture for EveryBody in Santa Fe, NM. They are also easier than two-story houses to structurally engineer and can be built with prefab components, if that is your jam."
                        img1={onestory}
                        img2={onestory2}
                    />
                    )



                    : id == "apartment" ?


                    (
                        <UnitDescription
                        type="an apartment"
                        description="An apartment is a private residence in a building or house that's divided into several separate dwellings. An apartment can be one small room or several."
                        img1={apartment}
                        img2={apartment2}
                    />
                    )




                    : id == "standalone" ?

                    (
                        <UnitDescription
                        type="a stanalone"
                        description="A stand-alone house (also called a single-detached dwelling, detached residence or detached house) is a free-standing residential building. It is sometimes referred to as a single-family home, as opposed to a multi-family residential dwelling."
                        img1={standalone}
                        img2={standalone2}
                    />
                    )
                    
                    
                    
                    
                    
                    
                    
                    
                    :''
                        
                    










}














































            <Footer />
        </>
    );
};

export default UnitDescriptionPage;
