import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({name,cuisines,avgRatingString,cloudinaryImageId}) => {
    return (
        <div className="card">
            <img className="card-img" src={IMG_CDN_URL+cloudinaryImageId} alt="Avatar"></img>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{cuisines.join(",")}</p>
                <p>{avgRatingString +" Stars"}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;
