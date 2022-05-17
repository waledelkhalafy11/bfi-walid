import {Container} from "react-bootstrap";
import react from 'react'
import blog1 from "../../Assets/imgs/blog/pexels-expect-best-323780.jpg";
import blog2 from "../../Assets/imgs/blog/pexels-pixabay-269262.jpg";
import blog3 from "../../Assets/imgs/blog/pexels-sevenstorm-juhaszimrus-439416.jpg"
const Blog = () =>{
    let prag =`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    return (
            <div className="relative parent w-[100vw] h-[854px]  mt-[90px] grid gird-cols-2 bg-[#f2f2f2]">

                 {/* ===========.>>>>>>>>>>>>> text */}
                <div className="w-[1050px] h-[500px]  mt-[262px] ml-[100px] relative rounded-md ">
                    <div className="absolute w-[400px]">
                        <h1 className="w-[450px]  text-[62px] font-semibold leading-[86px] text-[#45b6ca] text-justify absolute">Find Your Dream Land</h1>
                    </div>
                    <div className=" left-0 line mb-5    w-[662px] h-[2px] bg-[#45b6ca] mt-[180px]"></div>
                    <div className="">
                        <p className="w-[700px] h-[220.8px] ml-[8px] absolute text-justify font-bold">{prag}</p>
                        
                    </div>
                    
                </div>

                {/* ===========.>>>>>>>>>>>>>> Cards */}
                <div className="absolute right-[100px] top-[111px] w-[597px] h-[651px] bg-[#f2f2f2] rounded-md">
                    <div className="absolute bottom-0 left-0 w-[310px] h-[550px] overflow-hidden rounded-md">
                        <img src={blog1} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="absolute top-0 right-0 w-[240px] h-[215px]  overflow-hidden rounded-md">
                        <img src={blog2} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                    <div className="absolute bottom-0 right-0 w-[240px] h-[385px] overflow-hidden rounded-md">
                        <img src={blog3} alt="" className="absolute h-full w-full object-cover"/>
                    </div>
                </div>
            </div>
            
    )
}
export default  Blog ;