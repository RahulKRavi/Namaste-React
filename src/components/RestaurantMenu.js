import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useMenu from "../utils/useMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const menu  = useMenu(resId)


    return (
        <>
            <div className="grid grid-cols-6 justify-around">
                {menu.map((item) => {
                    return (
                        <div className="h-72 m-5 p-5 bg-slate-300 rounded-md" key={item.card.info.id}>
                            <MenuCard item={item.card.info} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default RestaurantMenu;
