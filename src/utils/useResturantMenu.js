import { useState, useEffect } from "react";

const useResturantMenu = (resId) => {

    const [ resMenuData, setResMenuData ] = useState(null);

    useEffect( () => {
        fetchMenu();
       }, [] );
      
    
        const fetchMenu = async () => {
            const data = await fetch (
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId="+ resId 
                );
            const json = await data.json();
             
            setResMenuData(json.data);
            console.log(json.data)
        
        };
    return resMenuData;
}

export default useResturantMenu;