import FixedNavbar from "../Layouts/Navbar";
import Hero from "../Layouts/Hero";
import Footer from "../Layouts/Footer";
const Landing = () => {
  return (
    <>
     <FixedNavbar/>
     <Hero/>
     
     <div className="h-[100vh] bg-[#f2f2f2]"></div>
     
     <Footer/>
    </>
  );
};

export default Landing;
