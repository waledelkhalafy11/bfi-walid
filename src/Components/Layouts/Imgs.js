import { Container } from "react-bootstrap";

const Imgs  = () => {
return(

<section className="galary bg-[#f2f2f2] py-[50px]">

<h2 className="text-center  font-black mb-5">Explore the most attractive areas in Beijing</h2>



    <Container  className="lg:d-none">


<div className="row place-content-center  lg:gap-[14px] ">
<div className=" col-lg-4 relative  col-sm-12  col-md-12 flex items-center  px-[20px] m-[14px] lg:px-[0px] lg:m-[0px]  overflow-hidden           w-full                         h-[345px]  lg:w-[26.5%]  ">
        <img src="https://beijing.b-cdn.net/wp-content/uploads/2021/11/city2.jpg"  className="object-cover h-full w-full rounded-md  text-center    lg:h-full  brightness-[80%] hover:brightness-[100%] hue-rotate-50" alt="" />
        <h5 className="absolute  top-[20px] left-[40px] lg:left-[20px]">
            <a  className=" no-underline font-bold text-white" href="#1">Balizhuang</a>
            </h5>
            <p className="absolute  bottom-[0px] left-[40px] lg:left-[20px] font-medium text-white">4 listing</p>
        </div>
       


        <div className="col-lg-4 relative  col-sm-12  col-md-12 flex items-center px-[20px] m-[14px] lg:px-[0px] lg:m-[0px]    overflow-hidden    w-full                         h-[345px]   lg:w-[26.5%]  ">
        <img src="https://beijing.b-cdn.net/wp-content/uploads/2021/11/city5.jpg"  className="object-cover h-full w-full rounded-md  text-center    lg:h-full    brightness-[80%] hover:brightness-[100%] hue-rotate-25" alt="" />
        <h5 className="absolute  top-[20px] left-[40px] lg:left-[20px]">
            <a  className=" no-underline font-bold text-white" href="#1">Balizhuang</a>
            </h5>
            <p className="absolute  bottom-[0px] left-[40px] lg:left-[20px] font-medium text-white">1 listing</p>
        </div>



        <div className="col-lg-4 relative  col-sm-12  col-md-12 flex items-center  px-[20px] m-[14px]  lg:px-[0px] lg:m-[0px]   overflow-hidden   w-full                         h-[345px]  lg:w-[26.5%]  ">
        <img src="https://beijing.b-cdn.net/wp-content/uploads/2021/11/city3.jpg"  className="object-cover h-full w-full rounded-md  text-center    lg:h-full  brightness-[80%] hover:brightness-[100%] hue-rotate-25" alt="" />
        <h5 className="absolute  top-[20px] left-[40px] lg:left-[20px]">
            <a  className=" no-underline font-bold text-white" href="#1">Balizhuang</a>
            </h5>
            <p className="absolute  bottom-[0px] left-[40px] lg:left-[20px] font-medium text-white">5 listing</p>
         
        </div>
</div>






<div className="row  place-content-center   mt-[14px]  lg:gap-[14px]">
        <div className="lg:col-lg-6 relative  col-sm-12 col-md-12 flex items-center  mx-[14px]   px-[20px] lg:px-[0px] lg:m-[0px]    overflow-hidden    w-full                        h-[345px]   lg:w-[40.4%]">
        <img src="https://beijing.b-cdn.net/wp-content/uploads/2021/11/city7.jpg" className="object-cover h-full w-full rounded-md text-center     brightness-[80%] hover:brightness-[100%] hue-rotate-25 " alt="" />
        <h5 className="absolute  top-[20px] left-[40px] lg:left-[20px]">
            <a  className=" no-underline font-bold text-white" href="#1">Balizhuang</a>
            </h5>
            <p className="absolute  bottom-[0px] left-[40px] lg:left-[20px] font-medium text-white">1 listing</p>
        </div>
        
        <div className="lg:col-lg-6 relative  col-sm-12 col-md-12 flex items-center mt-[28px] mx-[14px]   px-[20px] lg:px-[0px] lg:m-[0px]    overflow-hidden    w-full                        h-[345px]   lg:w-[40.4%]">
        <img src="https://beijing.b-cdn.net/wp-content/uploads/2021/11/city6.jpg" className="object-cover h-full w-full rounded-md text-center      brightness-[80%] hover:brightness-[100%] hue-rotate-25" alt="" />
        <h5 className="absolute  top-[20px] left-[40px] lg:left-[20px]">
            <a  className=" no-underline font-bold text-white" href="#1">Balizhuang</a>
            </h5>
            <p className="absolute  bottom-[0px] left-[40px] font-medium text-white">14 listing</p>
        </div>
         </div>

    
</Container>
</section>
)
  




}
export default Imgs;

