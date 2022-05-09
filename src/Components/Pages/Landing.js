import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import ClientSection from "../Layouts/ClientsSection";
import Counter from "../Layouts/Counter";
import Listings from "../Layouts/ListingsCards";
import WhyUs from "../Layouts/WhyUs";
import GorgeousHome from "../Layouts/GorgeousHome";
const Landing = () => {
  return (
    <>
    <Hero/> 
    <Counter/>
    <WhyUs/>
    <Blog/>
    <GorgeousHome />
    <Listings/>
    <Imgs/>  
    <ClientSection/>
    <Footer/> 
    </>
  );
};

export default Landing;

