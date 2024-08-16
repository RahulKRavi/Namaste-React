import { IMG_CDN_URL } from "../utils/Config";

const RestaurantCard = ({name,cuisines,avgRatingString,cloudinaryImageId}) => {
    return (
        <div className="bg-white m-2 p-3 w-96">
            <img className="h-14" src={IMG_CDN_URL+cloudinaryImageId} alt="Avatar"></img>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{cuisines.join(",")}</p>
                <p>{avgRatingString +" Stars"}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;
