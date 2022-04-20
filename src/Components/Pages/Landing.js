import FixedNavbar from "../Layouts/Navbar";
import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs';
import Counter from "../Layouts/Counter";

const Landing = () => {
  return (
    <>
   <FixedNavbar/>
    <Hero/>
    <Counter/>
    <Blog/>
    <Imgs/>
    <Footer/> 
    
    </>
  );
};

export default Landing;

