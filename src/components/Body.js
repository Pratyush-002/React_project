import ResturantCard from "./ResturantCards";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer_ui";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Body = () =>{
    const [ resturantData , setResData ] = useState([]);

    const [ filterListOfRes , setFilteredListOfRes ] = useState([])

    const [ searchText , setsearchText ] = useState("")



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        
        console.log(json)

        setResData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    return resturantData.length === 0 ?(
    <Shimmer />
    ) : (
        <div className="body">
        <div className="rating">

            <input 
            className="search-box" 
            type="text" 
            value={searchText} 
            onChange={(e)=>{
                setsearchText(e.target.value);
            }}/>
           

            <button className="search-btn" onClick={()=>{

                const filteredSearch = resturantData.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    
                );

                setFilteredListOfRes(filteredSearch);
            }}>Search</button>

            <button className="rating-btn" 
             onClick={()=>{
               const filteredList = resturantData.filter(
                (res) =>  res.info.avgRating > 4 )
                setFilteredListOfRes(filteredList);  
                }
            }
                > Rating 4.0
                 <FontAwesomeIcon icon={faStar} bounce size="xs" style={{color: "#0a0a0a",marginLeft:"5px"}} />
                </button> 
        </div>
        <div className="res-container">
            {
            filterListOfRes.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/resturants/"+restaurant.info.id}><ResturantCard key={restaurant.info.id} resData={restaurant} /></Link>)
            
        )};
        </div>
        </div>
    )
}

export default Body;