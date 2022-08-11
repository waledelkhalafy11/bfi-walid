import React from "react";
import "./layouts.css";
import { Link } from "react-router-dom";
import facebook from "../../Assets/icons/footer/facebook.svg"
import instagram from "../../Assets/icons/footer/instagram.svg";
import twitter from "../../Assets/icons/footer/twitter.svg";
import linkedin from "../../Assets/icons/footer/linkedin.svg";
import whatsapp from "../../Assets/icons/footer/whatsapp.svg";
// import google from "../../Assets/icons/google.png";
import email from "../../Assets/icons/email.png";
import location from "../../Assets/icons/location.png";
import telephone from "../../Assets/icons/telephone.png";

import ClientSection from "../Layouts/ClientsSection";

function Footer() {

  function MyhomeItem(props) {
    return (
      <div className={`flex flex-row mb-3 myhomeitem ${props.classNameAdd}`}>
        <img src={props.img} className="w-6 h-6   "></img>
        <a href={props.href}><p className="my-auto ml-2 ">{props.title} </p></a>
      </div>
    );
  }

  function BlogItem(props) {
    return (
      <Link to="/Units">
        {" "}
        <p className="p-2 h-[40px] border-solid border-b border-[#a9a5a1] hover:font-bold hover:ml-[10px] duration-200 hover:text-[#29aae3]">
          {props.title}
        </p>
      </Link>
    );
  }

  function FeaturesItem(props) {
    return (
      <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
        <a href={props.href}>{props.title}</a>
      </p>
    );
  }

  function FollowusItem(props) {
    return (
      <a href={props.href} target="_blank">
        {" "}
        <img
          src={props.img}
          className={`w-8 h-8 mb-3 ml-2 ${props.classNameAdd}`}
        ></img>
      </a>
    );
  }

  return (
    <>

      
      

    

      <div className="w-full h-auto bg-[#0c314e]">
        <div className="flex flex-col md:flex-row mb-2 w-3/4 h-full mx-auto text-[#ffff]">
          <div className="w-full md:w-[26%] md:mr-2 mt-4 text-left">
            <h1>BFI</h1>
            <p className="font-bold text-lg mb-2 text-[#f2f2f2]">Brookfield Investments</p>
            <p className="mb-3 text-left">
              {" "}
              Brookfield works with of Egypt’s top real estate developers to market their new properties. Brookfield’s agents are trustworthy thus your perfect consultant.
            </p>

            <MyhomeItem img={location}
            href = "https://goo.gl/maps/7p7YShU1u4LtQHCP9"
            title="6th obour buildings, Salah Salem Road. 16th floor"/>
            <MyhomeItem
              img={telephone}
              title="+20 122 500 3306"
              classNameAdd="myhome "
              href="tel:01225003306"
            />
            <MyhomeItem
              img={email}
              title="Info@bfi-re.com"
              classNameAdd="myhome  md:mt-8  lg:mt-0"
              href="mailto: Info@bfi-re.com"
            />
          </div>

          <div className="w-full md:w-[22%] mr-6 mt-4 text-left">
            <p className="font-bold mb-3 text-[#f2f2f2]">CATEGORIES</p>
            <div className="blogs">
              <BlogItem href="#" title="Residential" />
              <BlogItem href="#" title="Commercial" />
              <BlogItem href="#" title="Administration" />
              <BlogItem href="#" title="Medical" />
            </div>
          </div>
          <div className="w-full md:w-[35%] mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">FEATURES</p>
            </div>
            <div className="flex flex-wrap mt-3 features">
              <FeaturesItem title="Standalone" href="#" />
              <FeaturesItem title="Twin House" href="#" />
              <FeaturesItem title="Town House" href="#" />
              <FeaturesItem title="Duplex" href="#" />
              <FeaturesItem title="Penthouse" href="#" />
              <FeaturesItem title="Appartment" href="#" />
              <FeaturesItem title="Chalets" href="#" />
              <FeaturesItem title="Loft" href="#" />
              <FeaturesItem title="One Story" href="#" />
            </div>
          </div>

          <div className="  md:mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">CONTACT US</p>
            </div>

            <div className="flex flex-row mt-3 followus">
              <FollowusItem href="https://www.facebook.com/" img={facebook} />
              <FollowusItem href="https://www.twitter.com/" img={twitter} />
              <FollowusItem href="https://www.instagram.com/" img={instagram} />
              <FollowusItem href="https://www.linkedin.com/" img={linkedin} />
              <FollowusItem href="https://www.whatsapp.com/" img={whatsapp} />
    
            </div>
          </div>
        </div>
        <div className="w-full h-10  bg-[#061d2e] pt-1">
          <p className="text-[#ffff] ">copyright &copy; 2022 BFI by Regum Apps Team </p>
        </div>
      </div>
    </>
  );
}


export default Footer;
