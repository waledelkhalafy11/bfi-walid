import React from "react";
import ContactUs from "../Layouts/ContactUs";
import Footer from "../Layouts/Footer";
import ContactUsPhoto from "../../Assets/imgs/restaurant.jpg";
import '../Layouts/layouts.css';



const ContactUsPage = () => {





    return (
        <>


            <div className="mb-40">
                <div>
                    <p className="mt-24 md:mt-40 mb-4 md:mb-28 w-[70%] mx-auto text-2xl md:text-4xl font-bold text-[#45b6ca]">Contact us today if you'd like to know more about how we help buy,sell or rent your home</p>
                </div>

                <div className="w-[80%] flex flex-col md:flex-row mx-auto my-10 md:mt-20 gap-4 md:gap-12 contactUsResponsive">
                    <div className="md:w-[60%]">

                        <img className=" h-full rounded-md" src={ContactUsPhoto}></img>

                    </div>

                    <div className="md:w-[40%]">

                        <ContactUs />

                    </div>
                </div>
            </div>





            <Footer />

        </>
    );
};

export default ContactUsPage;