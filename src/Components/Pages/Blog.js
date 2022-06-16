import { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import blog1 from "../../Assets/imgs/blog/1.png";
import blog2 from "../../Assets/imgs/blog/2.png";
import blog3 from "../../Assets/imgs/blog/3.png";
import Footer from "../Layouts/Footer";
import Cards from "../Layouts/card";
import ReactLoading from "react-loading";


const Blog = () => {
  let prag = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `;

    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state.apiReducer);
    //  ********* States  *************
    const [dataApi, setDataApi] = useState([]);
    //  ********* UseEffects *************
    useEffect(() => {
      document.getElementById('bfiTitle').innerHTML = 'BFI | Units';

        dataApiPromise.then(function (result) {
            setDataApi(result);
        });
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    },[]);




    let unitsPerPage = 3 ;
    const [data    ,setData   ]  = useState([...dataApi]); 
    const [visible ,setVisible]  = useState(unitsPerPage);
    const [main    ,setMain   ]  = useState([...dataApi]);



    /*filter main categories */
  
    let filter_Residential    = (item) => {
      if (item.unit.main_category === "Residential"   ) {return item;}};
    let filter_Commerical     = (item) => {
      if (item.unit.main_category === "Commercial"    ) {return item;}};
    let filter_Administrative = (item) => {
      if (item.unit.main_category === "Administration") {return item;}};
    let filter_Medical        = (item) => {
      if (item.unit.main_category === "Medical"       ) {return item;}};


    
    /*filter  categories */
    let filter_appartment = (item) => {
        if (item.unit.unit_category   === "Appartment")   {return item;}};   
    let filter_villa  =     (item) => {
        if (item.unit.unit_category   === "Villa"     )   {return item;}};
    let filter_Sahel =     (item) => {
        if (item.unit.unit_category   === "Sahel"    )   {return item;}};


      /*filter  from  all data */
    let all            = dataApi                              ;
    let residential    = dataApi.filter(filter_Residential   );
    let commerical     = dataApi.filter(filter_Commerical    );
    let administrative = dataApi.filter(filter_Administrative);
    let medical        = dataApi.filter(filter_Medical       );


     /*filter  residential */
    let appartment     = dataApi.filter(filter_appartment);
    let sahel          = dataApi.filter( filter_Sahel    );
    let villa          = dataApi.filter(filter_villa     );
  

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
      let noMainUnit = () =>{
        if(main.length == 0  ){
          return "";
        } else if (main.length <= visible){
          return "";
        }else {
          return(
            <button onClick={showMoreUnits}
              className="bg-[#45b6ca] rounded-[64px] text-white font-bold w-[50%] h-[50px]  sm:w-[164px] sm:h-[57px] mt-5  mb-[30px]  hover:opacity-80"
              >
              Load More
              </button>
          )}}

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
                        <div className="mx-auto w-[50px] h-[50px] md:w-[100px] md:h-[100px] my-[100px] translate-x-[-50%] ">
            
                            <ReactLoading type={type} color={color} height={100} width={100} />
            
                        </div>
            
            
                    );
                    } 
            }

        let allblogData = all.slice(0,visible).map((itm)    => {
              return (
                <Cards
                  title     = {itm.unit.unit_name}
                  price     = {itm.unit.unit_price}
                  rooms     = {itm.props[0].bedroom}
                  bathrooms = {itm.props[0].bathroom}
                  address   = {itm.unit.unit_address}
                  space     = {itm.props[0].surface_area}
                  image     = {process.env.REACT_APP_DOMAIN +itm.photos[0].unit_image_url}
                  id        = {itm.unit.id}
                  unit_category ={itm.unit.res_unit_category}
                  main_category ={itm.unit.main_category}
                  res_category ={itm.unit.res_unit_category}
                />
              );
        });
        let mainData      = main.slice(0,visible).map((itm) => {
        
          return (
            <Cards
              title     = {itm.unit.unit_name}
              price     = {itm.unit.unit_price}
              rooms     = {itm.props[0].bedroom}
              bathrooms = {itm.props[0].bathroom}
              address   = {itm.unit.unit_address}
              space     = {itm.props[0].surface_area}
              image     = {process.env.REACT_APP_DOMAIN +itm.photos[0].unit_image_url}
              id        = {itm.unit.id}
              unit_category ={itm.unit.res_unit_category}
              main_category ={itm.unit.main_category}
              res_category ={itm.unit.res_unit_category}
            />
          );
        });

        let blogData    = data.slice(0,visible).map((itm)   => { 
         
          
          return (

          
          <Cards
            title     = {itm.unit.unit_name}
            price     = {itm.unit.unit_price}
            rooms     = {itm.props[0].bedroom}
            bathrooms = {itm.props[0].bathroom}
            space     = {itm.props[0].surface_area}
            image     = {process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
            id        = {itm.unit.id}
            address   = {itm.unit.unit_address}
      
            main_category ={itm.unit.main_category}
            res_category ={itm.unit.res_unit_category}
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

{/* -------------------------main nav---------------------------------------- */}
      <nav>
          <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
            <button onClick={()=>{setData([...all]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px] active "
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
           

            <button onClick={()=>{setData([...residential]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px]   "
              id="nav-residential-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-residential"
              type="button"
              role="tab"
              aria-controls="nav-residential"
              aria-selected="true"
            >
              residential
            </button>

            <button onClick={()=>{setMain([...commerical]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px]   "
              id="nav-commerical-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-commerical"
              type="button"
              role="tab"
              aria-controls="nav-commerical"
              aria-selected="true"
            >
              commerical
            </button>

            <button onClick={()=>{setMain([...administrative]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px]   "
              id="nav-administrative-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-administrative"
              type="button"
              role="tab"
              aria-controls="nav-administrative"
              aria-selected="true"
            >
              administrative
            </button>

            <button  onClick={()=>{setMain([...medical]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px]   "
              id="nav-medical-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-medical"
              type="button"
              role="tab"
              aria-controls="nav-medical"
              aria-selected="true"
            >
              medical
            </button>
          </div>
        </nav>








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
            id="nav-residential"
            role="tabpanel"
            aria-labelledby="nav-residential-tab"
          >
           
           <nav>
          <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
          <button onClick={()=> {setData([...residential]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px] active ]"
              id="nav-allres-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-allres"
              type="button"
              role="tab"
              aria-controls="nav-allres"
              aria-selected="false"
            >
              All
            </button>
            
            <button onClick={()=> {setData([...appartment]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px]  ]"
              id="nav-villa-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-villa"
              type="button"
              role="tab"
              aria-controls="nav-villa"
              aria-selected="false"
            >
              Appartment
            </button>
            <button  onClick={()=>{setData([...villa]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px] ]"
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
          
            <button   onClick={()=>{setData([...sahel]);(setVisible(unitsPerPage))}}
              class="nav-link text-[black] hover:text-[#45b6ca] text-[16px] s"
              id="nav-sahel-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-sahel"
              type="button"
              role="tab"
              aria-controls="nav-sahel"
              aria-selected="false"
            >
              Sahel
            </button>

          </div>
        </nav>



        <div class="tab-content mb-5" id="nav-tabContent">


        <div
            class="tab-pane fade show active"
            id="nav-allres"
            role="tabpanel"
            aria-labelledby="nav-allres-tab"
          >
            <div className="row mt-5">{unitAvailable(blogData,data)} </div>
            {noUnit()}
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
            id="nav-sahel"
            role="tabpanel"
            aria-labelledby="nav-sahel-tab"
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
         

        </div>
          </div>






          <div
            class="tab-pane fade "
            id="nav-commerical"
            role="tabpanel"
            aria-labelledby="nav-commerical-tab"
          >
            <div className="row"> {unitAvailable(mainData,main)}</div>
            {noMainUnit()}
            </div>


            <div
            class="tab-pane fade "
            id="nav-administrative"
            role="tabpanel"
            aria-labelledby="nav-administrative-tab"
          >
            <div className="row"> {unitAvailable(mainData,main)}</div>
            {noMainUnit()}
            </div>


            <div
            class="tab-pane fade "
            id="nav-medical"
            role="tabpanel"
            aria-labelledby="nav-  medical-tab"
          >
            <div className="row"> {unitAvailable(mainData,main)}</div>
            {noMainUnit()}
            </div>





            </div>













        
       

{/* ------------------------------------------------------down units---------------------------------------------------------------- */}


     
      </div>



     
      <Footer />
    </div>
  );
};
export default Blog;
