import { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import blog1 from "../../Assets/imgs/blog/1.png";
import blog2 from "../../Assets/imgs/blog/2.png";
import blog3 from "../../Assets/imgs/blog/3.png";
import Footer from "../Layouts/Footer";
import Cards from "../Layouts/card";
import ReactLoading from "react-loading";


const Blog = () => {

    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state);




    //  ********* States  *************
    const [dataApi, setDataApi] = useState([]);



    //  ********* UseEffects *************

    useEffect(() => {
      document.getElementById('bfiTitle').innerHTML = 'BFI | Units';

        dataApiPromise.then(function (result) {
            setDataApi(result);
        });
    },[]);



  let prag = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `;
      
    let unitsPerPage = 3 ;
    const [data ,setData]         = useState([...dataApi]); 
    const [visible , setVisible]  = useState(unitsPerPage);
  
    let filter_appartment = (item) => {
        if (item.unit.unit_category === "Appartment") {return item;}};
    let filter_office = (item) =>     {
        if (item.unit.unit_category === "Office")     {return item;}};
    let filter_villa = (item) =>      {
        if (item.unit.unit_category === "Villa")      {return item;}};
    let filter_house = (item) =>      {
        if (item.unit.unit_category === "House")      {return item;}};

    let all        = dataApi                          ;
    let appartment = dataApi.filter(filter_appartment);
    let office     = dataApi.filter(filter_office)    ;
    let villa      = dataApi.filter(filter_villa)     ;
    let house      = dataApi.filter(filter_house)     ;


    const showMoreUnits = () => {
      setVisible(visible + 3);
    }



      let noUnitAll = () =>{
      if(all.length == 0  ){
        return ""
      }else if (all.length <= visible){
        return ""
      }else {
        return <button onClick={showMoreUnits}
            className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[50%] h-[50px]  sm:w-[164px] sm:h-[57px] mt-5  mb-[30px]  hover:opacity-80"
            >
            Load More
            </button>
        
      }}

        let noUnit = () =>{
          if(data.length == 0  ){
            return "";
          } else if (data.length <= visible){
            return "";
          }else {
            return(
              <button onClick={showMoreUnits}
                className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[50%] h-[50px]  sm:w-[164px] sm:h-[57px] mt-5  mb-[30px]  hover:opacity-80"
                >
                Load More
                </button>
            )}}
  

         
            let color = "#45b6ca"
            let type = "spinningBubbles"

            let unitAvailable = (itm , category) => {

              if(dataApi.length != 0 ){
                  if(category.length == 0) {
                      return (
                      <h1
                      className="py-[100px]">No unit available</h1> 
                      )
                    }else{

                     return itm
                    } } else {
                      return (
                        <div className="mx-auto w-[50px] h-[50px] md:w-[100px] md:h-[100px] my-[100px]  ">
            
                            <ReactLoading type={type} color={color} height={100} width={100} />
            
                        </div>
            
            
                    );
                    } 
            }

    let allblogData = all.slice(0,visible).map((itm) => {
  
        return (
          <Cards
            title     = {itm.unit.unit_name}
            price     = {itm.unit.unit_price}
            rooms     = {itm.props[0].bedroom}
            bathrooms = {itm.props[0].bathroom}
            address   = {itm.unit.unit_address}
            space     = "170"
            image     = {process.env.REACT_APP_DOMAIN +itm.photos[0].unit_image_url}
            id        = {itm.unit.id}
          />
        );
  });


    let blogData = data.slice(0,visible).map((itm) => { return (
    <Cards
      title     = {itm.unit.unit_name}
      price     = {itm.unit.unit_price}
      rooms     = {itm.props[0].bedroom}
      bathrooms = {itm.props[0].bathroom}
      space     = "170"
      image     = {process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
      id        = {itm.unit.id}
    />
    );}

);

  return (
    <div className="blog bg-[#f2f2f2]">
      <div className=" mt-[90px] row bg-[#f2f2f2] w-full p-[20px]">
        {/*-----------------------------------HEro--------------------------------------*/}
        {/* ===========.>>>>>>>>>>>>> text */}
        <div className="col-lg-6 col-md-12 order-2 order-lg-1  my-auto p-0">
          <div className="   mt-[50px] w-[95%] md:w-[70%]  mx-auto rounded-md ">
                <h1 className="text-left text-[400%]  font-semibold leading-[86px] text-[#45b6ca]">Find Your<br />Dream Land</h1>
                <div className="  line mb-[20px]   w-[85%] h-[2px] bg-[#45b6ca] mt-[20px]"></div>
                <div className="">
                    <p className="w-[80%] h-[220.8px] ml-[8px]  text-justify font-bold">{prag}</p>
                </div>
          </div>
        </div>

        {/* ===========.>>>>>>>>>>>>>> Cards */}

        <div className="col-lg-6 col-md-12 order-1 order-lg-2 my-auto p-0">
            <div className=" relative mx-auto w-[95%] md:w-[70%]  h-[651px] bg-[#f2f2f2] mt-[50px] rounded-md animate__fadeInUp animate__delay-2s	2s">
                <div className="absolute bottom-0 left-0 h-[651px] w-[55%] sm:h-[550px] overflow-hidden rounded-md">
                    <img
                        src={blog1}
                        alt=""
                        className="absolute h-full w-full object-cover"
                    />
                </div>
                <div className="absolute top-0 right-0 w-[43.685%] h-[255px]  sm:h-[260px]  overflow-hidden rounded-md">
                    <img
                        src={blog2}
                        alt=""
                        className="absolute h-full w-full object-cover"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-[43.685%] h-[390px] sm:h-[385px] overflow-hidden rounded-md">
                    <img
                        src={blog3}
                        alt=""
                        className="absolute h-full w-full object-cover"
                    />
                </div>
            </div>
            </div>
      </div>

      {/*----------------------------------------------------- properties_lists---------------------------------------------------------------------------------- */}
      <div className="properties_lists container">
        <nav>
          <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
            <button onClick={()=>{setData([...all]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[13px] active sm:text-[16px] "
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              All
            </button>
            <button onClick={()=> {setData([...villa]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[13px] sm:text-[16px]"
              id="nav-villa-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-villa"
              type="button"
              role="tab"
              aria-controls="nav-villa"
              aria-selected="false"
            >
              Villa
            </button>
            <button  onClick={()=>{setData([...house]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[13px] sm:text-[16px]"
              id="nav-house-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-house"
              type="button"
              role="tab"
              aria-controls="nav-house"
              aria-selected="false"
            >
              House
            </button>
          
            <button   onClick={()=>{setData([...appartment]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[13px] sm:text-[16px]"
              id="nav-appartment-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-appartment"
              type="button"
              role="tab"
              aria-controls="nav-appartment"
              aria-selected="false"
            >
              Apartment
            </button>

            <button onClick={()=>{setData([...office]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[13px] sm:text-[16px]"
              id="nav-office-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-office"
              type="button"
              role="tab"
              aria-controls="nav-office"
              aria-selected="false"
            >
              Office
            </button>
          </div>
        </nav>

{/* ------------------------------------------------------down units---------------------------------------------------------------- */}


        <div class="tab-content mb-5" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
          >
           
            <div className="row"> {unitAvailable(allblogData,all)}</div>
            {noUnitAll()}
            </div>

          <div
            class="tab-pane fade"
            id="nav-villa"
            role="tabpanel"
            aria-labelledby="nav-villa-tab"
          >
            <div className="row mt-5">{unitAvailable(blogData,data)} </div>
            {noUnit()}
          </div>

          <div
            class="tab-pane fade"
            id="nav-house"
            role="tabpanel"
            aria-labelledby="nav-house-tab"
          >
            <div className="row mt-5">{unitAvailable(blogData,data)}</div>
            {noUnit()}
     
          </div>




          <div
            class="tab-pane fade"
            id="nav-appartment"
            role="tabpanel"
            aria-labelledby="nav-appartment-tab"
          >
            <div className="row mt-5">{unitAvailable(blogData,data)}</div>
            {noUnit()}
     
          </div>



          <div
            class="tab-pane fade"
            id="nav-office"
            role="tabpanel"
            aria-labelledby="nav-office-tab"
          >
            <div className="row mt-5">{unitAvailable(blogData,data)}</div>
            {noUnit()}
     
          </div>

        </div>
     
      </div>



     
      <Footer />
    </div>
  );
};
export default Blog;
