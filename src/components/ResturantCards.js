import { CDN_URL } from "../utils/constants";


const ResturantCard = (props) =>{
    const { resData } =props;
    const {cloudinaryImageId, name, cuisines, avgRating}= resData.info

    return(
        <div className="m-4 p-5 w-[270px] rounded-lg bg-slate-50 shadow-xl hover:bg-slate-300">
            <img className="rounded-lg" 
            src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="py-2 font-bold">{name}</h3>
            <h4 className="truncate">{cuisines.join(",")}</h4>
            <h4>{avgRating}stars</h4>
        </div> 
    )
}

export const UpdatedResCard = () =>{
    return (props) => {
        return (
            <div>
                <label className="absolute">🟢</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;