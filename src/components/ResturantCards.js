import { CDN_URL } from "../utils/constants";


const ResturantCard = (props) =>{
    const { resData } =props;
    const {cloudinaryImageId, name, cuisines, avgRating}= resData.info

    return(
        <div className="res-card" style={{backgroundColor: "lightgrey"}}>
            <img className="res-img" 
            src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4 className="cusines-info" style={{wordWrap:"break-word"}}>{cuisines.join(",")}</h4>
            <h4>{avgRating}stars</h4>
        </div> 
    )
}

export default ResturantCard;