import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ListingsCards from "./ListingsCards";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

const options = {
    margin: 10,
    responsiveClass: false,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        980: {
            items: 2,
        },

        1200: {
            items: 2,
        },
    },
};





function bubbleSort(arr, n) {
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j].unit.unit_price < arr[j + 1].unit.unit_price) {
                // swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped === false)
            break;
    }
    return arr;
}





const ListingCardApi = () => {
    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state);




    //  ********* States  *************
    const [listingsApi, setlistingApi] = useState([]);
    const [listingsApiLegnth, setListingsApiLegnth] = useState()
    const [afterFillters, setafterFillters] = useState([...listingsApi])


    //  ********* UseEffects *************

    useEffect(() => {
        dataApiPromise.then(function (result) {


            let filteredList = [];
            const sortedList = bubbleSort(result, result.length);
    
            
            for (let i = 0; i < 4; i++) {
                filteredList.push(sortedList[i]);
    
            };
            setlistingApi(filteredList);
        });
        
    },[]);

    useEffect(() => {
     
        setListingsApiLegnth(listingsApi.length)

        

    }, [listingsApi]);

  

   

    return (

        <section className="ListingsCards bg-[#f2f2f2]  py-[50px] ">
            <div className="container max-w-[750px] lg:max-w-[900px]">
                <h2 className="text-center  font-black text-[#45b6ca]">Listings available for sale</h2>
                <p className="mx-auto max-w-[550px] mb-5">THese are the latest properties in the Sales category displayed using the latest properties slider shortcode. You control the number of listings.</p>
                <Container>
                    <OwlCarousel
                        className="slider-items owl-carousel owl-theme"
                        {...options}
                    >


                        {/* ------------------------------------------ Card ----------------------------------------------------------- */}


                        {/* <div className="item max-w-[750px]  h-fit bg-[#f2f2f2] ">
            <div className="cardd  ">

            </div>
        </div> */}
                        {listingsApi?.map((itm) => (
            <ListingsCards
                title={itm.unit.unit_name}
                price={itm.unit.unit_price}
                rooms={itm.props[0].bedroom}
                bathrooms={itm.props[0].bathroom}
                address={itm.unit.unit_address}
                space="170"
                image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
                id={itm.unit.id} />
        )
    )}


                    </OwlCarousel>
                </Container>
                {/* <div className="text-center m-3">
        <a
        className="bot-button no-underline  bg-[#45b6ca] text-white py-[10px] px-[20px] text-[16px] font-normal leading-[36px] my-[0] mx-auto  hover:opacity-80"
        href=""
        >
        VISIT BLOG
        </a>
    </div> */}
            </div>
        </section>

    )
}
export default ListingCardApi;