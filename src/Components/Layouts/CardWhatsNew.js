import react from "react";


function CardWhatsNew (props){
    let filterDate = props.date;
if(filterDate.length > 10 ) filterDate = filterDate.substring(0,10);
    return(






        <>
            <div className="item  h-fit bg-[#f2f2f2]">
                <div className="cardd  relative">
                    <div className="image  relative h-[300px]  overflow-hidden">
                    <img
                        src={props.image}
                        className="card-img-top h-full w-full object-cover "
                        alt="1"
                    />
                    </div>
                    <div className="date bg-[#45b6ca] absolute top-[20px] right-0 text-white font-semibold leading-[14px] py-[6px] px-[14px] uppercase">
                        {filterDate}
                    </div>
                    <div className="card-body h-[200px]  bg-[#ffff] text-right">
                    <h5 className="card-title  text-left">
                        <a
                        className="text-[24px] font-semibold no-underline text-black"
                        href=""
                        >
                        {props.title}
                        </a>
                    </h5>
                    <p className="card-text text-[16px] leading[1.5] text-left">
                        {props.description}
                    </p>

                    <a
                        className="blogButton absolute   right-[10px]  bottom-[30px] text-[14px] font-normal no-underline text-[#45b6ca] py-[5px] px-[16px] border-2 border-[#45b6ca]  hover:bg-[#45b6ca] hover:text-white"
                        href=""
                    >
                        READ MORE
                    </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CardWhatsNew;