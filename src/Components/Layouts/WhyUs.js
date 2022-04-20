
import {Container} from 'react-bootstrap';
import Icon1 from "../../Assets/icons/apartment.png";
import Icon2 from "../../Assets/icons/budget (1).png";
import Icon3 from "../../Assets/icons/certificate.png";
import Icon4 from "../../Assets/icons/real-estate.png";
import Icon5 from "../../Assets/icons/school.png";
import Icon6 from "../../Assets/icons/sofa.png";
const WhyUs =()=> {

    let whyus1 = "with a robust selection of popular properties on hand, as well as leading properties from experts.";
    let whyus2 = "Our stress-free finance department that can find financial solutions to save you mony.";
    let whyus3 = "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.";
    let whyus4 = "Receive advices, listing, and neighborhood information.";
    let whyus5 = "You and your landlord always see the same info, and you will get all important information directly to your post office.";
    let whyus6 = "Search near top-rated schools and explore neighborhoods.";
    return (
        <>
            <Container>


            <div className="m-auto ">


                <div className="mb-[50px]  lg:mt-6  ">
                    <p className="text-3xl font-bold text-[#005f8f] pt-[50px] ">Why Choose Us</p>
                    <p></p>

                </div>
                {/* --------------------car 1-----------------------------------------  */}
                    <div className="row md:mb-[100px]  ">
                        <div class="   w-[350px] py-[40px]  col-lg-4  col-md-12   overflow-hidden  m-auto   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between   ">
                            <img src={Icon1} alt="group" className="w-14 h-14 mx-auto  pl-[10px]"></img>
                            <div class="px-6 ">
                                <div class="font-bold text-xl  text-[#005f8f] text-left">WIDE RANGE OF PROPERTIES</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal ">
                                    {whyus1}
                                </p>
                            </div>

                        </div>




                          {/* --------------------car 2-----------------------------------------  */}
                        <div class=" w-[350px] py-[40px] col-lg-4  col-md-12    overflow-hidden  mx-auto   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between ">
                        <img src={Icon2} alt="handshake" className="w-14 h-14 mx-auto ] pl-[10px]"></img>
                            <div class="px-6 ">
                                <div class="font-bold text-xl  text-[#005f8f] text-left">FINANCING</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal">
                                {whyus2}
                                </p>
                            </div>

                        </div>



                          {/* --------------------car 3-----------------------------------------  */}

                        <div class=" w-[350px] py-[40px] md:my-0  col-lg-4  col-md-12 mx-auto  overflow-hidden  md:m-auto  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between">
                        <img src={Icon4} alt="nofee" className="w-14 h-14 mx-auto  pl-[10px]"></img>
                            <div class="px-6 "> 
                                <div class="font-bold text-xl text-[#005f8f] text-left">TRUSTED BY THOUSANDS</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal">
                                {whyus3}
                                </p>
                            </div>

                        </div>
                   








                         {/* --------------------car 4-----------------------------------------  */}

                   
                    <div class="w-[350px]  my-[40px] xl:my-0  col-lg-4  col-md-12   overflow-hidden  mx-auto  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between">
                            <img src={Icon6} alt="heart" className="w-14 h-14 mx-auto  pl-[10px]"></img>
                            <div class="px-6">
                                <div class="font-bold text-xl  text-[#005f8f] text-left">GET IMPORTANT NOTIFICATIONS</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal ">
                                {whyus4}
                                </p>
                            </div>

                        </div>






                       {/* --------------------car 5-----------------------------------------  */}
                        <div class=" w-[350px] py-[40px] md:py-0 py-[40px] lg:py-0      col-lg-4  col-md-12   overflow-hidden  mx-auto  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between">
                        <img src={Icon3} alt="moneybag" className="w-14 h-14 mx-auto  pl-[10px]"></img>
                            <div class="px-6 ">
                                <div class="font-bold text-xl  text-[#005f8f] text-left">TRANSPARENCY</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal ">
                                {whyus5}                               
                                </p>
                            </div>

                        </div>






                        {/* --------------------car 6-----------------------------------------  */}
                        <div class="  w-[350px] py-[40px] md:py-0 py-[40px] lg:py-0  col-lg-4  col-md-12   overflow-hidden  mx-auto  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex justify-between">
                        <img src={Icon5} alt="clock" className="w-14 h-14 mx-auto  pl-[10px] "></img>
                            <div class="px-6">
                                <div class="font-bold text-xl  text-[#005f8f] text-left">NEAR BY MY</div>
                                <p class="text-gray-700 text-base text-left whitespace-normal ">
                                {whyus6}
                                </p>
                            </div>
                        </div>
                    </div>
                    


            



            </div>



            </Container>                
        </>
    )
}

export default WhyUs;