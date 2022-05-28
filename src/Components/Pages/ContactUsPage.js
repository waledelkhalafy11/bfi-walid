import React from "react";
import ContactUs from "../Layouts/ContactUs";
import Footer from "../Layouts/Footer";
import ContactUsPhoto from "../../Assets/imgs/restaurant.jpg";
import "../Layouts/layouts.css";

const ContactUsPage = () => {
    return (
        <>
            <div className="mb-40 ">
                <div>
                    <p className="mt-24 md:mt-40 mb-4 md:mb-28   lg:w-[70%]  mx-auto text-2xl md:text-4xl font-bold text-[#45b6ca]">
                        Contact us today if you'd like to know more about how we help
                        buy,sell or rent your home
                    </p>
                </div>

                <div className="w-[90%] d-flex flex-col md:flex-row mx-auto my-10 md:mt-20   justify-between  contactUsResponsive">
                    <div className="md:w-[55%] md:h-[550px] overflow-hidden  ">
                        <img
                            className="  rounded-md h-full w-full object-cover"
                            src={ContactUsPhoto}
                        ></img>
                    </div>

                    <div className="md:w-[100%] lg:w-[40%] h-full">
                        <ContactUs />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactUsPage;
