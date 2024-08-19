import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useMenu from "../utils/useMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const menu  = useMenu(resId)


    return (
        <>
            <div className="flex justify-around justify-items-center flex-wrap">
                {menu.map((item) => {
                    return (
                        <MenuCard key={item.card.info.id} item={item.card.info} />
                    )
                })}
            </div>
        </>
    )
}
export default RestaurantMenu;
