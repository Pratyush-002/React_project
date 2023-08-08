import { useEffect, useState } from "react";

const ResturantMenu = () => {
    const [ resMenuData, setResMenuData ] = useState([])


   useEffect( () => {
    fetchMenu();
   }, [] );


    const fetchMenu = async () => {
        const menuData = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId=90170&catalog_qa=undefined&submitAction=ENTER"
            );
        const json = await menuData.json();

        setResMenuData(json?.data);

    console.log(json); 
    };
    const {name, cuisines, areaName, costForTwoMessage, totalRatingsString} = resMenuData?.cards[0]?.card?.card?.info

    return(
        <div className="menu">
            <h1>
                {name}
            </h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
            <p>{costForTwoMessage} - {totalRatingsString}</p>
            <h2>
                MENU
            </h2>
            <ul>
                <li>Fries</li>
                <li>Biryani</li>
                <li>Soft</li>
                <li>Cudvofjaj</li>
                
            </ul>
        </div>
    )
};


export default ResturantMenu;