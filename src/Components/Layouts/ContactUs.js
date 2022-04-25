import React from "react";
import "../Layouts/layouts.css";
import swal from 'sweetalert';


function ContactUs() {


    const sendCase = false ;
    const sendMessageSucsess = () => swal("Good job!", "Thank You For Sending Us!", "success");
    const sendMessageError = () => swal("Sending Error", "Please Try Again .", "error");


    return (
        <>

            <div className="bg-white  py-24" id="contact-us">
                <div>
                    <p className="w-[55%] mx-auto  text-2xl font-bold text-[#45b6ca]">Contact us today if you'd like to know more about how we help buy,sell or rent your home</p>
                </div>
                <div className="bg-white shadow-[0px_0px_10px_2px_rgba(204,204,204,0.5)] w-[70%] mx-auto mt-8 py-16 px-2 rounded-md">
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


                    <button className="bg-[#45b6ca] rounded-md text-white font-bold w-[70%] h-[35px] my-2" onClick={sendCase ? sendMessageSucsess : sendMessageError}>Send Message</button>

                </div>
            </div>


        </>
    );
};

export default ContactUs;