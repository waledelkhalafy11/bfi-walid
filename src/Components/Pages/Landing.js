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

