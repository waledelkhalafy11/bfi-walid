import React from "react";
import "./layouts.css";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import twitter from "../../Assets/icons/twitter.png";
import linkedin from "../../Assets/icons/linkedin.png";
import youtube from "../../Assets/icons/youtube.png";
import google from "../../Assets/icons/google.png";
import themeforest from "../../Assets/icons/themeforest.png";
import audiojungle from "../../Assets/icons/audiojungle.png";
import codecanyon from "../../Assets/icons/codecanyon.png";
import graphicriver from "../../Assets/icons/graphicriver.png";
import photodune from "../../Assets/icons/photodune.png";
import email from "../../Assets/icons/email.png";
import location from "../../Assets/icons/location.png";
import telephone from "../../Assets/icons/telephone.png";

function Footer() {
  return (
    <>
      {/* First Part Of The Footer */}

      <div className="   h-auto bg-[#ffffff] md:pb-8">
        <div className="h-4"></div>

        <div className="text-center text-[#a9a5a1] md:text-3xl ">
          <p className="text-[#000000] font-bold">
            C
            <span className="pb-2 border-solid md:border-b-2 border-[#b85d7c]">
              LIENT
            </span>
            S
          </p>
        </div>

        <div className="flex  slider flex-row   md:mt-8 text-[#a9a5a1] md:gap-14 mx-auto md:justify-center text-lg">
          <div className="flex flex-row slide">
            <img src={themeforest} className="w-8 h-8"></img>
            <p className="ml-2">themeforest</p>
          </div>

          <div className="flex flex-row slide">
            <img src={audiojungle} className="w-8 h-8"></img>
            <p className="ml-2">audiojungle</p>
          </div>

          <div className="flex flex-row slide">
            <img src={codecanyon} className="w-8 h-8"></img>
            <p className="ml-2">codecanyon</p>
          </div>

          <div className="flex flex-row slide">
            <img src={graphicriver} className="w-8 h-8"></img>
            <p className="ml-2">graphicriver</p>
          </div>

          <div className="flex flex-row slide">
            <img src={photodune} className="w-8 h-8"></img>
            <p className="ml-2">photodune</p>
          </div>
        </div>
      </div>

      {/* Second Part Of The Footer */}

      <div className="w-full h-auto bg-[#333333]">
        <div className="flex flex-col md:flex-row mb-2 w-3/4 h-full mx-auto text-[#a9a5a1]">
          <div className="w-full md:w-[26%] md:mr-2 mt-4 text-left">
            <p className="font-bold mb-5 text-[#f2f2f2]">MY HOME</p>
            <p className="mb-3 text-left">
              {" "}
              Lorem ipsum dolor,eius, illo eum, adipisci perferendis.
            </p>

            <div className="flex flex-row mb-3 ">
              <img src={location} className="w-6 h-6   "></img>
              <p className="my-auto ml-2">520 5th Ave, New York, USA </p>
            </div>
            <div className="flex flex-row mb-3 myhome">
              <img src={telephone} className="w-6 h-6  "></img>
              <p className="my-auto ml-2">(123) 345-6789 </p>
            </div>
            <div className="flex md:mt-8 lg:mt-0  flex-row mb-3 myhome">
              <img src={email} className="w-6 h-6 "></img>
              <p className="my-auto ml-2">support@tangibledesing.net </p>
            </div>
          </div>
          <div className="w-full md:w-[22%] mr-6 mt-4 text-left">
            <p className="font-bold mb-3 text-[#f2f2f2]">BLOG</p>
            <div className="blogs">
              <a href="#">
                {" "}
                <p className="p-2 border-solid border-b border-[#a9a5a1]">
                  october 2017
                </p>
              </a>
              <a href="#">
                {" "}
                <p className="p-2 border-solid border-b border-[#a9a5a1]">
                  september 2017
                </p>
              </a>

              <a href="#">
                {" "}
                <p className="p-2 border-solid border-b border-[#a9a5a1]">
                  august 2017
                </p>
              </a>
              <a href="#">
                {" "}
                <p className="p-2 border-solid border-b border-[#a9a5a1]">
                  july 2017
                </p>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[35%] mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">FEATURES</p>
            </div>
            <div className="flex flex-wrap mt-3 features">
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Air Conditioning</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Ceilfing Fan</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Dishwasher</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Fireplace</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">High Ceiling</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Microwave</a>{" "}
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Patio</a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Porch </a>
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Refrigerator</a>{" "}
              </p>
              <p className="w-auto border-solid border ml-2 border-[#a9a5a1] py-[1px] px-[2px] md:px-4  hover:bg-[#29aae3]">
                <a href="#">Wifi </a>{" "}
              </p>
            </div>
          </div>
          <div className="w-3/4 md:w-[17%] mx-auto md:mx-2 mt-4 text-left">
            <div>
              <p className="font-bold text-[#f2f2f2]">FOLLOW US</p>
            </div>

            <div className="flex flex-wrap mt-3 followus">
              <a href="https://www.facebook.com/" target="_blank">
                {" "}
                <img src={facebook} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                {" "}
                <img src={twitter} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                {" "}
                <img src={instagram} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src={linkedin} className="w-8 h-8 mb-3 ml-2"></img>
              </a>

              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img src={youtube} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.google.com/" target="_blank">
                {" "}
                <img
                  src={google}
                  className="w-8 h-8 mb-3 ml-2 hover:rotate-180 hover:translate-y-[-5px]"
                ></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src={youtube} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src={instagram} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src={facebook} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src={linkedin} className="w-8 h-8 mb-3 ml-2"></img>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-10  bg-[#222222] pt-1">
          <p className="text-[#a9a5a1] ">
            2022 BFI by Regum Apps Development Team
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
