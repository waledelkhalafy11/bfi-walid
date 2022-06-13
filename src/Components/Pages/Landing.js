import { useSelector } from "react-redux";
import { useState , useEffect } from "react";
import ReactLoading from "react-loading";

import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Imgs from '../Layouts/Imgs'
import ClientSection from "../Layouts/ClientsSection";
import Counter from "../Layouts/Counter";
import Listings from "../Layouts/ListingCardApi";
import WhyUs from "../Layouts/WhyUs";
// import GorgeousHome from "../Layouts/GorgeousHome";
import Blogs from "../Layouts/Blogs"




const Landing = () => {

  document.getElementById('bfiTitle').innerHTML = 'BFI | Home ';

  const dataApiPromise = useSelector((state) => state.apiReducer);

  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    dataApiPromise.then(function (result) {
        setDataApi(result);
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
},[]);



  let color = "#45b6ca"
  let type = "spinningBubbles"

  while (!dataApi[0]) {
      return (
          <div className="mx-auto w-[50px] h-[50px] md:w-[100px] md:h-[100px] mt-[45vh] translate-x-[-50%]  ">

              <ReactLoading type={type} color={color} height={100} width={100} />

          </div>


      );
  }


  return (
    <>
    <Hero/> 
    <Counter/>
    <Blogs />
    {/* <GorgeousHome /> */}
    <WhyUs/>
    <Listings/>
    <Imgs/>  
    <ClientSection/>
    <Footer/> 

    </>
  );
};

export default Landing;

