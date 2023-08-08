import { CDN_URL } from "../utils/constants";


const ResturantCard = (props) =>{
    const { resData } =props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo}= resData.info

    return(
        <div className="res-card" style={{backgroundColor: "lightgrey"}}>
            <img className="res-img" 
            src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo /100} for two</h4>
        </div> 
    )
}

export default ResturantCard;