import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resMenu = useMenu(resId)
    
    return (
        <>
            <div className="restaurant-menu">
                <h1>{resMenu.name}</h1>
                <h2>{resMenu.locality}</h2>
            </div>
        </>
    )
}
export default RestaurantMenu;