import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useMenu from "../utils/useMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const menu  = useMenu(resId)


    return (
        <>
            <div className="flex flex-wrap">
                {menu.map((item) => {
                    return (
                        <div className="m-5 p-5 justify-around w-2/5 h-52 bg-slate-300 rounded-md">
                            <MenuCard key={item.card.info.id} item={item.card.info} />
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}
export default RestaurantMenu;
