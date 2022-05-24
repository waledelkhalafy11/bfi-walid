import placeImg from "../../Assets/imgs/placeimg.jpg";
import { Container } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const PlacesCard = (props) => {
  
  return (
    <>
      <Container
        fluid
        className="flex shadow-sm py-[0%] md:py-[2.5%] pl-0 mt-4 rounded-2xl md:h-[30%] bg-white flex-row"
      >
        <Container fluid className=" w-[30%] ">
          <img className="w-[100%] rounded-xl" src={placeImg}></img>
        </Container>
        <Container
          fluid
          className=" md:p-2 text-left justify-between w-[70%]  "
        >
          <Container className="relative" >
          <h3 className="text-[12px] md:text-lg text-gray-600">A Premuiem appartment on zamalek</h3>

            <h2 className="text-[10px] md:text-xl text-left">
              Small Studio direct to the Nile, on rooftop
            </h2>

           <span  className="hidden absolute top-[1%] right-[1%]"><FavoriteBorderIcon/></span>
           <h3 className="text-[6px] md:text-lg text-gray-600">3 bedrooms , 1 bathroom , 110m</h3>

            <h4 className="text-[10px] md:text-lg">2,000,0000 LE </h4>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PlacesCard;
