import Img2 from '../../Assets/imgs/pexels-curtis-adams-3288103 (1).jpg';
import Img1 from '../../Assets/imgs/pexels-mark-mccammon-1080696.jpg';
import Img3 from '../../Assets/imgs/pexels-pixabay-534151.jpg';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Container } from 'react-bootstrap';



const GorgeousHome = () => {    

    const Paragraph ='This property is mostly wooded and site high on a hilltop overlooking the Mohawk River Valley. Located right in the heart of Upsta...';
    return(

        <Container fluid >
        <div className=" sm:h-full  sm:w-[500px]  sm:p-0    sm:justify-center sm:block  sm:mx-auto   md:justify-center md:block md:mx-auto md:w-[680px] md:p-0          lg:grid-flow-col lg:gap-4  lg:grid lg:mx-0 lg:w-full  lg:grid-cols-12 lg:h-[700px] lg:p-0               xl:w-full xl:grid-flow-col xl:gap-4 xl:grid xl:mx-0 xl:grid-cols-12  xl:h-[700px]      2xl:mb-[100px] 2xl:grid 2xl:grid-cols-12   2xl:-w-full 2xl:justify-center 2xl:h-[600px] ">
                {/* ------------------------------------- col1 -------------------------------------- */}
                <div className=" sm:grid-cols-12 sm:w-[500px] sm:h-[600px] sm:rounded-md                     md:grid-cols-12 md:w-[680px]             lg:rounded-none md:h-[700px] lg:w-[250px] lg:col-start-1 lg:col-end-4                  xl:w-[330px] xl:col-start-1 xl:col-end-4    overflow-hidden     2xl:col-start-1 2xl:col-end-4 2xl:h-[700px] 2xl:w-full ">   
                    <img src={Img1} alt="#" className="h-[100%] w-[100%] object-cover "></img>
                </div>
                {/* ------------------------------------- col2 -------------------------------------- */}
                <div className=" p-[10px] sm:grid-cols-12 sm:w-[500px] sm:row-span-3 sm:ml-0                     md:w-[680px] md:grid-cols-12 md:row-span-3 md:ml-0                                 lg:ml-2 lg:w-[300px] lg:h-[700px] lg:col-start-4 lg:col-end-8        xl:ml-4 xl:w-[350px] xl:h-[700px] xl:col-start-4 xl:col-end-8               2xl:ml-7 2xl:w-[500px] 2xl:h-[700px] 2xl:col-start-4 2xl:col-end-8 ">
                        <div className=" sm:text-[30px] whitespace-normal font-semibold        md:text-[35px] lg:text-[30px]   xl:text-[30px]      2xl:text-[40px]  mb-3  text-[#005f8f] text-left ">$ 770,000</div>
                        <div className=" sm:text-[40px] whitespace-normal font-bold            md:text-[50px]            lg:mb-3 lg:text-[35px]      xl:text-[36px]   2xl:text-[45px]   text-left">Gorgeous Home for Sale in Jersey</div>
                        <div className="  whitespace-normal text-left">
                            <div className="text-left sm:mb-3 sm:flex md:mb-3   flex       md:flex lg:mb-3         lg:flex               xl:mt-8 sl:flex xl:space-x-4 xl:space-x-reverse ">
                            <div className="mr-[15px] font-semibold          md:text-[30px]          lg:text-[30px] ">5 BD</div>
                            <div className="mr-[15px] font-semibold          md:text-[30px]          lg:text-[30px] ">6 BA</div>
                            <div className="          font-semibold          md:text-[30px]          lg:text-[30px] ">190 ft<sup>2</sup></div>
                            </div>
                        </div>
                        <div className='text-left sm:text-[20px]     md:text-[30px]        lg:text-[25px] lg:mt-12       xl:text-[30px] text-gray-700 '>
                            <ReactReadMoreReadLess
                                charLimit={100}
                                readMoreText={"discover more ▼"}
                                readLessText={"discover less ▲"}
                            >
                                {Paragraph}
                            </ReactReadMoreReadLess>
                            
                        </div>
                    </div>    
                {/* ------------------------------------- col3 -------------------------------------- */}    

                <div className="sm:grid-cols-12 sm:w-[500px] sm:row-span-2 col-span-2  sm:ml-0 sm:mt-5              md:w-[50%]                  lg:w-[94%] lg:mt-0  lg:col-start-8 lg:col-end-13 lg:h-[700px]            xl:col-start-8 xl:col-end-13 xl:w-[95%] lg:ml-8 lg:items-stretch  overflow-hidden                   2xl:col-start-8 2xl:col-end-13 2xl:h-[700px] 2xl:w-[97%] 2xl:ml-6       ">
                    <img src={Img2} alt="#" className="sm:rounded-t-lg      lg:rounded-none md:h-[70%] lg:w-full xl:w-full 2xl:w-full  object-cover  	"></img>
                    <img src={Img3} alt="#" className="sm:rounded-b-lg      lg:rounded-none lg:h-[30%] lg:w-full xl:w-full 2xl:w-full  object-cover"></img>
                </div>

            </div>
            </Container>
    )
}

export default GorgeousHome;