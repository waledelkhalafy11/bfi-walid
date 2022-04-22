import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import WhyUs from '../Layouts/WhyUs';
import UnitPage from "./UnitPage";
import Counter from '../Layouts/Counter';
const Landing = () => {
  return (
    <>
    <Hero/>
    <Counter/>
    <WhyUs />
    <Blog/>
    <Imgs/>
    <UnitPage/>
    <Footer/>
    </>
  );
};

export default Landing;

