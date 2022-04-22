import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
import Blog from "../Layouts/Blogs";
import Imgs from '../Layouts/Imgs'
import WhyUs from '../Layouts/WhyUs';
import UnitPage from "./UnitPage";
import Counter from '../Layouts/Counter';
import Listings from "../Layouts/ListingsCards";
const Landing = () => {
  return (
    <>
    <Hero/>
    <Counter/>
    <WhyUs />
    <Blog/>
    <Listings/>
    <Imgs/>
    <UnitPage/>
    <Footer/>
    </>
  );
};

export default Landing;

