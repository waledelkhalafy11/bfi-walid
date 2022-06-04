
import { tw } from "../../Assets/Animations/typeWrite";
import { hc } from "../../Assets/Animations/heroCards";
import villaIcon from "../../Assets/icons/hero-villa.svg";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Hero = () => {




    //  ********* Redux Context *************
    const dataWebPromise = useSelector((state) => state.webReducer);




    //  ********* States  *************
    const [dataWeb, setDataWeb] = useState([]);



    //  ********* UseEffects *************

    useEffect(() => {
      dataWebPromise.then(function (result) {
        setDataWeb(result);

        });
    },[]);

// console.log(dataWeb.heroCards);


let herodata = dataWeb.heroCards;
  
let heroCards = herodata?.map((itm)=>{



  return (


    <div>
    <a>
    <div
      id={itm.card.element_id_name} 
      className="md:w-[300px] w-[100%]  p-2 min-h-[20vh]  md:p-4 cursor-pointer my-4 md:my-2 md:m-2 md:h-[200px] rounded-3xl bg-[#1d709471]"
      onMouseEnter={() => setHoverdCard(itm.card.id)}
      onMouseLeave={() => setHoverdCard(-1)}>
    <img className="filter-white w-[18%] mx-auto my-1" src={process.env.REACT_APP_DOMAIN + itm.icon[0].card_icon_url} />
    <h3>{itm.card.card_title}</h3>
    <p>{itm.card.card_desciption}</p>
    </div>
       </a>
   
  </div>


  )
})
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
  const [hoverdCard , setHoverdCard] = useState(0)
  
  useEffect(()=> {
  if(hoverdCard != 0){
    hc(hoverdCard)
  }
   
  } , [hoverdCard])


  return (
    <>
      <Container fluid className="  p-0 hero-bg min-h-[35vh] md:min-h-[100vh]">
        
        <Container fluid className="relative px-[5%] pt-[15%] md:pt-[10%]">
          <div className= "mt-[15%] md:mt-[0%]">
            <h1 className="md:text-[50px] text-white font-[jost] tracking-wider font-black">Brookfield Investment<br/>For Real Estate</h1> 
          </div>
          <div className="left-[0%]">
            <h1 id="demo" className="md:text-[50px] text-[#0c303f] md:text-[#45b6ca] font-[changa] font-[900]"></h1>
          </div>
        </Container>

        <Container className="text-white py-4 rounded-3xl justify-between align-middle mt-[3%] md:mt-[5%] flex-wrap flex md:flex-row ">
           {heroCards}
           
          </Container>
        
      </Container>
    </>
  );
};

export default Hero;
