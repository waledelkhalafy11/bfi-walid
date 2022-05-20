import {Container} from "react-bootstrap";
import react from 'react'
import blog1 from "../../Assets/imgs/blog/1.png";
import blog2 from "../../Assets/imgs/blog/2.png";
import blog3 from "../../Assets/imgs/blog/3.png";

import Cards from "../Layouts/card";
import Footer from"../Layouts/Footer";
const Blog = () =>{
    let prag =`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `





  
    return (
        <div className="blog bg-[#f2f2f2]">
            <div className=" mt-[90px] row bg-[#f2f2f2] p-[20px]">

         {/*-----------------------------------HEro--------------------------------------*/}
                 {/* ===========.>>>>>>>>>>>>> text */}

                 <div className="col-lg-6 col-md-12 order-2 order-lg-1  my-auto p-0">
                <div className="   mt-[50px] w-[95%] md:w-[70%]  mx-auto rounded-md ">
                    
                        <h1 className="text-left text-[400%]  font-semibold leading-[86px] text-[#45b6ca]">Find Your<br/>Dream Land</h1>
               
                    <div className="  line mb-[20px]   w-[85%] h-[2px] bg-[#45b6ca] mt-[20px]"></div>
                    <div className="">
                        <p className="w-[80%] h-[220.8px] ml-[8px]  text-justify font-bold">{prag}</p>
                        
                    </div>
                    </div>
                </div>

                {/* ===========.>>>>>>>>>>>>>> Cards */}

                <div className="col-lg-6 col-md-12 order-1 order-lg-2 my-auto p-0" >
                <div className=" relative mx-auto w-[95%] md:w-[70%]  h-[651px] mx-auto bg-[#f2f2f2] mt-[50px] rounded-md">
                    <div className="absolute bottom-0 left-0 h-[651px] w-[55%] sm:h-[550px] overflow-hidden rounded-md">
                        <img src={blog1} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="absolute top-0 right-0 w-[43.685%] h-[255px]  sm:h-[260px]  overflow-hidden rounded-md">
                        <img src={blog2} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="absolute bottom-0 right-0 w-[43.685%] h-[390px] sm:h-[385px] overflow-hidden rounded-md">
                        <img src={blog3} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                </div>
                </div>
                </div>




            {/*----------------------------------------------------- properties_lists---------------------------------------------------------------------------------- */}
            <div className="properties_lists container"> 

            <nav>
  <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
    <button class="nav-link text-[black] hover:text-[#45b6ca]  active  " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link text-[black] hover:text-[#45b6ca] " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link text-[black] hover:text-[#45b6ca] " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
  </div>
</nav>



<div class="tab-content mb-5" id="nav-tabContent">


  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      

      
      

    <div className="row mt-5">
             
        <div className="col-lg-4 col-md-6">
       
         <Cards 
           title="Apartment with subunits"
           price="45000"
           rooms="3"
           bathrooms="2"
           space= "170"
           address="Abu Al Feda, Cairo Governorate, Egypt"
            />

        </div>

        
        </div> 



</div>
  
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <div className="row mt-5">
             
             <div className="col-lg-4 col-md-6">
            
              <Cards 
                title="Apartment with subunits"
                price="45000"
                rooms="3"
                bathrooms="2"
                space= "170"
                address="Abu Al Feda, Cairo Governorate, Egypt"
                 />
     
             </div>
     
             
             </div> 
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
  <div className="row mt-5">
             
             <div className="col-lg-4 col-md-6">
            
              <Cards 
                title="Apartment with subunits"
                price="455000"
                rooms="3"
                bathrooms="2"
                space= "170"
                address="Abu Al Feda, Cairo Governorate, Egypt"
                 />
     
             </div>
     
             
             </div> 
  </div>





  </div>


</div>




                <Footer />
            </div>

    )
}
export default  Blog ;