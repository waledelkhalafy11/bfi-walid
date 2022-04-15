import React from "react";
import "./layouts.css";
import OwlCarousel from "react-owl-carousel";
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import { Container,} from "react-bootstrap";

const options = {
    margin : 10,
    responsiveClass: false,
    autoplay:true,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        980: {
            items: 2,
        },
        
        1200: {
            items: 3,
  
        }
    },
  };
  

function Blog(){


    return ( 

<section className="blog bg-[#f2f2f2] py-[50px] ">
<div className="container max-w-[1170px]">

<h2 className="text-center  font-black">BLOG</h2>
<div className="line mb-5 my-0 mx-auto  w-[90px] h-[2px] bg-[#29AAE3] " ></div>


<Container>
  <OwlCarousel  className="slider-items owl-carousel owl-theme "
  {...options}>


<div className="item  h-fit bg-[#f2f2f2]">
   <div className="cardd  relative">
     <div className="image    overflow-hidden" >
   <img src="https://myhometheme.net/agency/wp-content/uploads/2017/02/full-floor-office-condo-600x375.jpg" className="card-img-top " alt="1"/></div>
  <div className="date bg-[#29AAE3] absolute top-[20px] right-0 text-white font-semibold leading-[14px] py-[6px] px-[14px] uppercase">September 30, 2017</div>
  <div className="card-body  bg-[#ffff] text-right">
  <h5 className="card-title  text-left">
  <a  className="text-[24px] font-semibold no-underline text-black" href="">Interior design books for beginners</a></h5>
  <p className="card-text text-[16px] leading[1.5] text-left">
We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill. We pushed through these towards...</p>

<a className="blogButton  text-[14px] font-normal no-underline text-[#29AAE3] py-[5px] px-[16px] border-2 border-[#29AAE3]  hover:bg-[#29AAE3] hover:text-white" href="">READ MORE</a>
</div>
</div>
</div>





<div className="item  h-fit bg-[#f2f2f2]">
   <div className="cardd  relative">
     <div className="image  overflow-hidden" >
   <img src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" className="card-img-top " alt="1"/></div>
  <div className="date bg-[#29AAE3] absolute top-[20px] right-0 text-white font-semibold leading-[14px] py-[6px] px-[14px] uppercase">September 30, 2017</div>
  <div className="card-body  bg-[#ffff] text-right">
  <h5 className="card-title  text-left">
  <a  className="text-[24px] font-semibold no-underline text-black" href="">Interior design books for beginners</a></h5>
  <p className="card-text text-[16px] leading[1.5] text-left">
We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill. We pushed through these towards...</p>

<a className="blogButton  text-[14px] font-normal no-underline text-[#29AAE3] py-[5px] px-[16px] border-2 border-[#29AAE3]  hover:bg-[#29AAE3] hover:text-white" href="">READ MORE</a>
</div>
</div>
</div>









<div className="item  h-fit bg-[#f2f2f2]">
   <div className="cardd  relative">
     <div className="image  overflow-hidden" >
   <img src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" className="card-img-top " alt="1"/></div>
  <div className="date bg-[#29AAE3] absolute top-[20px] right-0 text-white font-semibold leading-[14px] py-[6px] px-[14px] uppercase">September 30, 2017</div>
  <div className="card-body  bg-[#ffff] text-right">
  <h5 className="card-title  text-left">
  <a  className="text-[24px] font-semibold no-underline text-black" href="">Interior design books for beginners</a></h5>
  <p className="card-text text-[16px] leading[1.5] text-left">
We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill. We pushed through these towards...</p>

<a className="blogButton  text-[14px] font-normal no-underline text-[#29AAE3] py-[5px] px-[16px] border-2 border-[#29AAE3]  hover:bg-[#29AAE3] hover:text-white" href="">READ MORE</a>
</div>
</div>
</div>











<div className="item  h-fit bg-[#f2f2f2]">
   <div className="cardd  relative">
     <div className="image  overflow-hidden" >
   <img src="https://myhometheme.net/agency/wp-content/uploads/2018/07/inside-600x375.jpg" className="card-img-top " alt="1"/></div>
  <div className="date bg-[#29AAE3] absolute top-[20px] right-0 text-white font-semibold leading-[14px] py-[6px] px-[14px] uppercase">September 30, 2017</div>
  <div className="card-body  bg-[#ffff] text-right">
  <h5 className="card-title  text-left">
  <a  className="text-[24px] font-semibold no-underline text-black" href="">Interior design books for beginners</a></h5>
  <p className="card-text text-[16px] leading[1.5] text-left">
We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods at the foot of the hill. We pushed through these towards...</p>

<a className="blogButton  text-[14px] font-normal no-underline text-[#29AAE3] py-[5px] px-[16px] border-2 border-[#29AAE3]  hover:bg-[#29AAE3] hover:text-white" href="">READ MORE</a>
</div>
</div>
</div>










  </OwlCarousel>
  </Container>
<div className="text-center m-3">
<a className="bot-button no-underline  bg-[#29AAE3] text-white py-[10px] px-[20px] text-[16px] font-normal leading-[36px] my-[0] mx-auto  hover:opacity-80" href="">VISIT BLOG</a>
</div>

 </div>
</section>

     );
}
 
export default Blog;