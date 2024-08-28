import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuCard = ({item}) => {
    const dispatch = useDispatch();
    const addFoodItem = (item)=>{
        dispatch(addItem(item))
    }
    const {name,price,ratings,imageId,category} = item;
    return (
        <>
            <img className="h-40 w-36 object-cover rounded-3xl" src={IMG_CDN_URL+imageId}></img>
            <h4>{name}</h4>
            <p className="text-sm text-yellow-500">{category}</p>
            <p className="text-sm text-yellow-500">{price/100}</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{ratings.aggregatedRating.rating}</span>
            <button className="bg-black text-white rounded-md p-1" onClick={()=>{
                addFoodItem(item)
            }}>Add To Cart</button>
        </>
    )
}

export default MenuCard