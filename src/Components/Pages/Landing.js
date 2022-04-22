import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import ClientSection from "../Layouts/ClientsSection";

import UnitPage from "./UnitPage";

const Landing = () => {
  return (
    <>
    <Hero/> 
    <Blog/>
    <Imgs/>  
    <ClientSection/> 
    <Footer/> 
    </>
  );
};

export default Landing;

