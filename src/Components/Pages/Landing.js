import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import ClientSection from "../Layouts/ClientsSection";
import ContactUs from "../Layouts/ContactUs";


const Landing = () => {
  return (
    <>
    <Hero/> 
    <Blog/>
    <Imgs/>  
 
    <ClientSection/> 
       <ContactUs/>
    <Footer/> 
    </>
  );
};

export default Landing;

