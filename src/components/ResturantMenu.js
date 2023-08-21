import { useEffect, useState } from "react";
import Shimmer from "./Shimmer_ui";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
    const [ resMenuData, setResMenuData ] = useState(null);

    const { resId } = useParams();


   useEffect( () => {
    fetchMenu();
   }, [] );
  

    const fetchMenu = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId="+ resId 
            );
        const json = await data.json();
         
        setResMenuData(json.data);
        console.log(json)
    
    };
    if (resMenuData === null) return <Shimmer />
    
    const {name , cuisines, areaName, costForTwoMessage, totalRatingsString} = resMenuData?.cards[0]?.card?.card?.info ;

    const { itemCards } = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card ;

    console.log(itemCards);

   
    return (
        
        <div className="menu">
            <h1>{ name}</h1>
            <h3>{ cuisines.join(", ")}</h3>
            <h3>{ areaName}</h3>
            <p>{costForTwoMessage} - {totalRatingsString}</p>
            <h2>{resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card.title}</h2>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name} - {(item.card.info.price)/100}</li>)}
            </ul>
            <h2></h2>
        </div>
    )
};


export default ResturantMenu;