import React from "react";
import "./layouts.css";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import twitter from "../../Assets/icons/twitter.png";
import linkedin from "../../Assets/icons/linkedin.png";
import youtube from "../../Assets/icons/youtube.png";
import google from "../../Assets/icons/google.png";

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
      <a href={props.href}>
        {" "}
        <p className="p-2 border-solid border-b border-[#a9a5a1] hover:font-bold hover:text-lg hover:text-[#29aae3]">
          {props.title}
        </p>
      </a>
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

      
      

    

      <div className="w-full h-auto bg-[#333333]">
        <div className="flex flex-col md:flex-row mb-2 w-3/4 h-full mx-auto text-[#a9a5a1]">
          <div className="w-full md:w-[26%] md:mr-2 mt-4 text-left">
            <p className="font-bold mb-5 text-[#f2f2f2]">MY HOME</p>
            <p className="mb-3 text-left">
              {" "}
              Lorem ipsum dolor,eius, illo eum, adipisci perferendis.
            </p>

            <MyhomeItem img={location}  title="520 5th Ave, New York, USA"/>
            <MyhomeItem
              img={telephone}
              title="(123) 345-6789"
              classNameAdd="myhome "
              href="tel:0105050505"
            />
            <MyhomeItem
              img={email}
              title="support@tangibledesing.net"
              classNameAdd="myhome  md:mt-8  lg:mt-0"
            />
          </div>

          <div className="w-full md:w-[22%] mr-6 mt-4 text-left">
            <p className="font-bold mb-3 text-[#f2f2f2]">BLOG</p>
            <div className="blogs">
              <BlogItem href="#" title="october 2017" />
              <BlogItem href="#" title="september 2017" />
              <BlogItem href="#" title="august 2017" />
              <BlogItem href="#" title="july 2017" />
            </div>
          </div>
          <div className="w-full md:w-[35%] mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">FEATURES</p>
            </div>
            <div className="flex flex-wrap mt-3 features">
              <FeaturesItem title="Air Conditioning" href="#" />
              <FeaturesItem title="Ceilfing Fan" href="#" />
              <FeaturesItem title="Dishwasher" href="#" />
              <FeaturesItem title="Fireplace" href="#" />
              <FeaturesItem title="High Ceiling" href="#" />
              <FeaturesItem title="Microwave" href="#" />
              <FeaturesItem title="Patio" href="#" />
              <FeaturesItem title="Porch" href="#" />
              <FeaturesItem title="Refrigerator" href="#" />
              <FeaturesItem title="Wifi" href="#" />
            </div>
          </div>

          <div className="w-3/4 md:w-[17%] mx-auto md:mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">FOLLOW US</p>
            </div>

            <div className="flex flex-wrap mt-3 followus">
              <FollowusItem href="https://www.facebook.com/" img={facebook} />
              <FollowusItem href="https://www.twitter.com/" img={twitter} />
              <FollowusItem href="https://www.instagram.com/" img={instagram} />
              <FollowusItem href="https://www.linkedin.com/" img={linkedin} />
              <FollowusItem href="https://www.youtube.com/" img={youtube} />
              <FollowusItem
                href="https://www.google.com/"
                img={google}
                classNameAdd="hover:rotate-180 hover:translate-y-[-5px]"
              />
              <FollowusItem href="https://www.linkedin.com/" img={youtube} />
              <FollowusItem href="https://www.linkedin.com/" img={instagram} />
              <FollowusItem href="https://www.linkedin.com/" img={facebook} />
              <FollowusItem href="https://www.linkedin.com/" img={linkedin} />
            </div>
          </div>
        </div>
        <div className="w-full h-10  bg-[#222222] pt-1">
          <p className="text-[#a9a5a1] ">2022 MyHome by Regums development </p>
        </div>
      </div>
    </>
  );
}


export default Footer;
