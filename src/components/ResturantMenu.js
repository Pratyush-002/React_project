import { useEffect } from "react";

const ResturantMenu = () => {

   useEffect( () => {
    fetchMenu();
   }, [] );


    const fetchMenu = async () => {
        const menuData = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId=90170&catalog_qa=undefined&submitAction=ENTER"
            );
        const json = await menuData.json();

    console.log(json);
    console.log("Hello")
    };

    return(
        <div>
            <h1>
                ResturantMenu
            </h1>
            <h2>
                MENU
            </h2>
            <ul>
                <li>Fries</li>
                <li>Biryani</li>
                <li>Soft</li>
                <li>Chaaps</li>
                
            </ul>
        </div>
    )
};


export default ResturantMenu;