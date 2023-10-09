import useResturantMenu from "../utils/useResturantMenu";
import ResCardShimmer from "./ResCardShimmer_ui";
import { useParams } from "react-router-dom";
import { IMG_FILES } from "../utils/constants";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {

    const { resId } = useParams();

    const resMenuData = useResturantMenu(resId);

    const [ showIndex, setShowIndex] = useState(null)

    if (resMenuData === null) return <ResCardShimmer />
    
    const {name , cuisines, areaName, costForTwoMessage, totalRatingsString, avgRatingString} = resMenuData?.cards[0]?.card?.card?.info ;

    const { itemCards } = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ;

    const catagories = 
                      resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
                          ((c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

                          console.log(catagories)

    
    return (
        
        <div className="flex flex-col">

           <div className="p-[10px] m-[20px] border-none rounded-3xl shadow-2xl w-[500px] relative left-[34%]">

                <h1 className="p-[5px] font-bold text-[30px]">{name}</h1>

            <div className="absolute right-[15px] bottom-[16px] p-[5px] w-fit border-solid border-[2px] border-black text-center rounded-xl text-yellow-400">
                <p>{totalRatingsString}</p>
                <hr className="border-[1px] border-black border-dashed"/>
                <p>⭐{avgRatingString}</p>
                </div>

                <h3 className="p-[5px] text-[20px]">{ cuisines.join(", ")}</h3>

                <hr className="border-[1px] border-black w-[50%] border-dashed mr-[6px]"/>

                <div className="flex p-[5px] text-[18px]">
            <h3 className="mr-[30px]">{areaName}</h3>
            <p className="ml-[40px]">{costForTwoMessage}</p>
                </div>

            </div>
            <div>
                {
                   catagories.map((category, index)=>(
                    <ResturantCategory data={category?.card?.card}
                    showItems = {index === showIndex ? true : false } 
                    setShowIndex={() => setShowIndex(index) }/>
                   ))  

                }

            </div>

            
            
        </div>
    )
};


export default ResturantMenu;