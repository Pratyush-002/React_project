import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer_ui";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {

    const { resId } = useParams();

    const resMenuData = useResturantMenu(resId);

    if (resMenuData === null) return <Shimmer />
    
    const {name , cuisines, areaName, costForTwoMessage, totalRatingsString} = resMenuData?.cards[0]?.card?.card?.info ;

    const { itemCards } = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ;

    
    return (
        
        <div className="menu">
            <div>
            <div>
                <h1>{ name}</h1>
                </div>
            <div>
                <div>
            <h3>{ cuisines.join(", ")}</h3>
            <h3>{ areaName}</h3>
            </div>
            <div>

            <p>{costForTwoMessage} - {totalRatingsString}</p>
            </div>
            </div>
           
            
           <div><h2>{resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card.title}</h2></div>
           </div>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name} - {(item.card.info.price)/100}</li>)}
            </ul>
            
        </div>
    )
};


export default ResturantMenu;