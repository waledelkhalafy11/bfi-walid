import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import WhyUs from '../Layouts/WhyUs';
import UnitPage from "./UnitPage";

const Landing = () => {
  return (
    <>
    <Hero/>
    <WhyUs />
    <Blog/>
    <Imgs/>
    <UnitPage/>
    <Footer/>
    </>
  );
};

export default Landing;

