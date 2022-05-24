import imgbox from "../../Assets/imgs/about-us/11.png";
import box9 from "../../Assets/imgs/about-us/box9.jpg";
import Footer from"../Layouts/Footer";

const AboutUs = () => {
    const prag1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `


    
  
    return(
        // ================> Cards photo
        
        <div className=" bg-[#f2f2f2] mt-[80px]">
            <div className="row   w-[95%] w-full  p-[20px]  ">
                 
                 {/* left side */}
                <div className="col-lg-6 col-md-12 col-sm-12 md:my-auto  ">
                <div className=" w-[100%]     ">
                    <img className="mx-auto  "  src={imgbox} alt="" />
                </div>
                </div>







                {/* right side */}
                 
                <div className=" col-lg-6 col-md-12 col-sm-12 mx-auto sm:my-auto  md:my-auto " >
                <div className=" w-full  md:w-[80%] mx-auto"  >
                    <h1 className="text-[300%] sm:text-[200%] md:text-[400%] font-semibold leading-[86px] text-[#45b6ca] text-justify">BFI Company</h1>
                    
                    <p className="mt-[25px] not-italic font-medium text-[18px] leading-[135.2%px] text-justify  text-xl ">{prag1}</p>
                    <div className="mt-[38px] text-left">
                        
                        <button  className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[164px] h-[57px]   text-center hover:opacity-80">Join Us</button>

                    </div>

                    <div className="mt-[50px]">

                        <div className="line mb-5 my-0 mx-auto  w-[100%] h-[2px] bg-[#45b6ca] "></div>

                    </div>
                    <div className="">
                        <p className=" text-justify font-medium not-italic text-[18px] mt-[0px]">Have any Questions? <br /> Contact Us!</p>
                        <h1 className="text-justify  h-[46px] ">+201111101011</h1>
                    </div>
                </div>
                </div>
            </div>





 
           {/*---------------------------------- down card-------------------------------------------------------------- */}


  

                <div className=" down    ">

                <div className="h-[300px]  w-full bg-[#f2f2f2]   " ></div>


                <div className="  w-full bg-[#45b6ca]  " >

                <div className="bg-[#ffffff]  p-[30px] w-[80%] relative md:bottom-[200px] bottom-[100px] mx-auto rounded-md row  ">
                <div className="col-lg-7 my-auto ">
                <div>
                    <div>
                        <h1 className="text-left font-semibold text-[#45b6ca] text-[200%]">About Us</h1>
                    </div>
                    <div className="text-left">
                        <p className="lg:w-[80%] w-full  text-justify">{prag1}<br/> {prag1}</p>
                        <button  className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[100%] h-[50px]  sm:w-[164px] sm:h-[57px]  mb-[30px]  hover:opacity-80">Read more</button>
                    </div>
                </div>
                </div>
                <div className="col-lg-5  my-auto">
                <div className="lg:w-[85%] w-full   rounded-md overflow-hidden mx-auto">
                    <img src={box9} className="object-cover rounded-md h-[300px] w-full" alt=""/>
                </div>
                </div>
           
</div>
</div>



               
                </div>
















          <div className=" " >
                <Footer />
            </div>
            
        </div>
    )
};
export default AboutUs;