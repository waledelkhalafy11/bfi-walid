import React from "react";
import { useState } from 'react';
import "../Layouts/layouts.css";
import Popup from '../Layouts/Popup';
import SweetAlert from 'react-bootstrap-sweetalert';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function ContactUs() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);


    }





    return (
        <>

            <div className="bg-[#0c303f] mt-16    py-24">
                <div>
                    <p className="w-[55%] mx-auto  text-2xl font-bold text-white">Contact us today if you'd like to know more about how we help buy,sell or rent your home</p>
                </div>
                <div className="bg-white  w-[70%] mx-auto mt-8 py-8 px-2 rounded-md">
                    <div>
                        <p className="text-xl font-bold">scedule a meeting with our team</p>
                        <p>our experts and developers would love to contribute their expertise and insights</p>

                    </div>
                    <div className="flex flex-col md:text-left ">

                        <div className="w-[70%] mx-auto">

                            <input type="text" placeholder="Name" className="p-2 w-full md:w-[48%] h-10 my-2 bg-[#f2f2f2]"></input>
                            <input type="number" placeholder="Mobile" className="p-2 w-full md:w-[48%] h-10 my-2 bg-[#f2f2f2] md:float-right"></input>
                        </div>
                        <div className="w-[70%] mx-auto">

                            <input type="email" placeholder="Email" className="p-2 w-full md:w-[48%] h-10 my-2 bg-[#f2f2f2]"></input>
                            <input type="text" placeholder="City" className="p-2 w-full md:w-[48%] h-10 my-2 bg-[#f2f2f2] md:float-right"></input>
                        </div>

                        <div className="mx-auto w-[70%]"> <div className=" mx-auto"><textarea placeholder="message" className="p-2 bg-[#f2f2f2] w-full mx-auto mt-2 "></textarea></div></div>





                    </div>
               


                    <input
                        type="button"
                        value="Send Your Email"
                        onClick={togglePopup}
                        className="bg-[#45b6ca] rounded-md text-white font-bold w-[70%] h-[35px] my-2"

                    />
                    {isOpen && <Popup
                        content={<>
                            <b></b>
                            <p className="font-bold text-lg text-[#0c303f]">Thank You For Sending Us</p>
                     
                        </>}
                        handleClose={togglePopup}
                    />}
                </div>
            </div>
















        </>
    );
};

export default ContactUs;