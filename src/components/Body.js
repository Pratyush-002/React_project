import ResturantCard, { UpdatedResCard } from "./ResturantCards";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer_ui";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { UpdatedResCard } from "./ResturantCards";


const Body = () =>{
    const [ resturantData , setResData ] = useState([]);

    const [ filterListOfRes , setFilteredListOfRes ] = useState([])

    const [ searchText , setsearchText ] = useState("")


    const ResturantCardPrometed = UpdatedResCard(ResturantCard);



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
        <div className="flex justify-end items-center p-2 m-2">

            <input 
            className="px-2 mx-2 bg-white border shadow-lg block rounded-md" 
            placeholder="Search Resturant"
            type="text" 
            value={searchText} 
            onChange={(e)=>{
                setsearchText(e.target.value);
            }}/>
           

            <button className="px-3 py-1 mx-2 text-center rounded-full  bg-yellow-200  hover:bg-yellow-400 hover:text-white shadow-sm" 
            onClick={()=>{
                const filteredSearch = resturantData.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListOfRes(filteredSearch);
            }}>Search</button>

            <button className="px-3 py-1 mx-2 text-center rounded-full bg-yellow-200  hover:bg-yellow-400 hover:text-white" 
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

        <div className="flex flex-wrap items-start justify-evenly">
            {filterListOfRes.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/resturants/"+restaurant?.info.id}>
                {restaurant.info.veg ? 
                (<ResturantCardPrometed resData={restaurant} />
                ):(
                    <ResturantCard resData={restaurant} />
                )}
                </Link>
                )
            
        )
        };
        </div>
        </div>
    )
}

export default Body;