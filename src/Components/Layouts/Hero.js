
import { tw } from "../../Assets/Animations/typeWrite";
import { hc } from "../../Assets/Animations/heroCards";
import villaIcon from "../../Assets/icons/villa-svgrepo-com.svg";
import { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const Hero = () => {
  
  // TYPEWRITE ANIMATION 
  
  useEffect(()=>{  
    
    tw({
      target : document.getElementById("demo"), 
      text : [
        "A House",
        "Appartment",
        "An Office",
        "A Villa",
      ],
      forward : 80, 
      backward : 40, 
      pause : 1500, 
      loop : true,  
      cursor : true 
    });
    
  },[])

  
  // HOVER ANIMATION 
  const [hoverdCard , setHoverdCard] = useState(-1)
  
  useEffect(()=> {
  
    hc(hoverdCard)
  } , [hoverdCard])


  return (
    <>
      <Container fluid className="  p-0 hero-bg min-h-[35vh] md:min-h-[100vh]">
        
        <Container fluid className="relative px-[5%] pt-[15%] md:pt-[10%]">
          <div className= "mt-[15%] md:mt-[0%]">
            <h1 className="md:text-[90px] text-white font-[jost] tracking-wide font-black">Brookfield Investment<br/>For Real Estate</h1> 
          </div>
          <div className="left-[0%]">
            <h1 id="demo" className="md:text-[90px] text-[#0c303f] md:text-[#45b6ca] font-[changa] font-[900]"></h1>
          </div>
        </Container>

        <Container className="text-white py-4 rounded-3xl justify-between align-middle mt-[3%] md:mt-[5%] flex-wrap flex md:flex-row">
            <div>
              <a>
              <div
                id="firstCard" 
                className="md:w-[300px] w-[100%]  p-2 min-h-[20vh]  md:p-4 cursor-pointer my-4 md:my-2 md:m-2 md:h-[200px] rounded-3xl bg-[#1d709471]"
                onMouseEnter={() => setHoverdCard(1)}
                onMouseLeave={() => setHoverdCard(-1)}>
              <img className="filter-white w-[18%] mx-auto my-1" src={villaIcon} />
              <h3>Fast Preformance</h3>
              <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
              </div>
                 </a>
             
            </div>
            
            <div>
              <a>
              <div 
                id="secondCard" 
                className="md:w-[300px] w-[100%]  p-2 min-h-[20vh]  md:p-4 cursor-pointer my-4 md:my-2 md:m-2 md:h-[200px] rounded-3xl bg-[#1d709471]"
                onMouseEnter={() => setHoverdCard(2)}
                onMouseLeave={() => setHoverdCard(-1)}>
              <img className="filter-white w-[18%] mx-auto my-1" src={villaIcon} />
              <h3>Fast Preformance</h3>
              <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
              </div>
                 </a>
             
            </div>
            <div>
            <a>
              <div
              id="thirdCard" 
              className="md:w-[300px] w-[100%]  p-2 min-h-[20vh]  md:p-4 cursor-pointer my-4 md:my-2 md:m-2 md:h-[200px] rounded-3xl bg-[#1d709471]"
               onMouseEnter={() => setHoverdCard(3)}
               onMouseLeave={() => setHoverdCard(-1)}>
              <img className="filter-white w-[18%] mx-auto my-1" src={villaIcon} />
              <h3>Fast Preformance</h3>
              <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
              </div>
             </a>
            </div>
            
           
          </Container>
        
      </Container>
    </>
  );
};

export default Hero;
