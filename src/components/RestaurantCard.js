import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({name,cuisines,avgRatingString,cloudinaryImageId}) => {
    return (
        <>
            <img className="m-auto h-44" src={IMG_CDN_URL + cloudinaryImageId} alt="Avatar"></img>
            <p className="text-center font-black text-blue-600">{name}</p>
            <p className="break-normal text-xs">{cuisines.join(", ")}</p>
            <p className="text-center">{avgRatingString + " Stars"}</p>
        </>
    );
}

export default RestaurantCard;
