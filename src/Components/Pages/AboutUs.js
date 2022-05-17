import box1 from "../../Assets/imgs/about-us/box1.jpg"
import box2 from "../../Assets/imgs/about-us/box2.jpg"
import box3 from "../../Assets/imgs/about-us/box3.jpg"
import box4 from "../../Assets/imgs/about-us/box4.jpg"
import box5 from "../../Assets/imgs/about-us/box5.jpg"
import box6 from "../../Assets/imgs/about-us/box6.jpg"
import box7 from "../../Assets/imgs/about-us/box7.jpg"
import box8 from "../../Assets/imgs/about-us/box8.jpg"
import box9 from "../../Assets/imgs/about-us/box9.jpg"

import Footer from"../Layouts/Footer";

const AboutUs = () => {
    const prag1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `





    return(
        <div className=" mt-[90px] bg-[#f2f2f2]">
            <div className="grid grid-cols-2 mb-[21px]">

                <div className=" w-[632px] h-[577px] ml-[182px] relative mt-[80px]">

                    <div className=" absolute  w-[220px] h-[220px] left:234px rounded-tl-[100px] overflow-hidden">
                        <img className="object-cover h-full w-full" src={box1} alt="" />
                    </div>
                    <div className="	 w-[96px] h-[96px] absolute left-[280px] top-[24px] rounded-[24px] overflow-hidden">
                        <img className="object-cover h-full w-full" src={box2} alt="" />
                    </div>
                    <div className="w-[166px] h-[166px] absolute top-0 right-[30px] rounded-tr-[50px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box3} alt="" />
                    </div>
                    <div className=" w-[130px] h-[130px] absolute left-[98px] top-[274px] rounded-bl-[50px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box4} alt="" />
                    </div>
                    <div className=" w-[182px] h-[182px] absolute left-[254px] top-[144px] rounded-tr-[100px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box5} alt="" />
                    </div>
                    <div className=" w-[142px] h-[142px] absolute bottom-0 left-0 rounded-bl-[90px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box6} alt="" />
                    </div>
                    <div className=" w-[130px] h-[130px] absolute bottom-[77px] left-[264px] rounded-br-[60px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box7} alt="" />
                    </div>
                    <div className=" w-[166px] h-[166px] absolute bottom-[113px] right-0 rounded-br-[90px] overflow-hidden">
                    <img className="object-cover h-full w-full" src={box8} alt="" />
                    </div>

                </div>
                <div className="  left-[973px] w-[648px] h-[577px] mt-[80px]">
                    <h1 className="text-[62px] font-semibold leading-[86px] text-[#45b6ca] text-justify">BFI Company</h1>
                    
                    <p className="mt-[25px] not-italic font-medium text-[18px] leading-[135.2%px] text-justify  text-xl ">{prag1}</p>
                    <div className="mt-[38px]">
                        
                        <button type="submit" className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[164px] h-[57px] my-4 left-[973px]  absolute text-center hover:opacity-80">Join Us</button>

                    </div>
                    <div className="mt-[133px]">

                        <div className="line mb-5 my-0 mx-auto  w-[662px] h-[2px] bg-[#45b6ca] "></div>

                    </div>
                    <div className="">
                        <p className=" text-justify font-medium not-italic text-[18px] mt-[0px]">Have any Questions? <br /> Contact Us!</p>
                        <h1 className="text-justify w-[648px] h-[46px] absolute">+201111101011</h1>
                    </div>
                </div>
                
            </div>
            <div className="h-[720px]  top-[96px]  flex-none relative ">
                <div className="bg-[#45b6ca] top-[272px] h-[448px] relative"></div>
                <div className="h-[611px] w-[1514px] bg-[#ffffff] bottom-[99px] left-[203px] absolute rounded-md grid gap-4 grid-cols-2">
                    <div className="w-[726px] h-[460px]   ml-[98px] mt-[75px] rounded-md">
                        <div className="">
                            <h1 className=" absolute ml-[8px] w-[297px] h-[79.12px]   text-justify mt-[23.08px] font-semibold text-[#45b6ca] text-[72px]">About Us</h1>
                        </div>
                        <div className="">
                            <p className="w-[700px] h-[220.8px] ml-[8px] mt-[132.53px] absolute text-justify">{prag1}<br/> {prag1}</p>
                            <button type="submit" className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[164px] h-[57px] mr-[554px] mt-[400px] text-center hover:opacity-80">Read more</button>
                        </div>
                    </div>
                    <div className="w-[540px] h-[460px] right-[97px] mt-[95px]   absolute rounded-md overflow-hidden">
                        <img src={box9} className="object-cover rounded-md " alt=""/>
                    </div>
                </div>
            </div>
            <div className="mt-[95px]">
                <Footer />
            </div>
        </div>
    )
};
export default AboutUs;