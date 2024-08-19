import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuCard = ({item}) => {
    const dispatch = useDispatch();
    const addFoodItem = (item)=>{
        dispatch(addItem(item))
    }
    const {name,description,imageId,category} = item;
    return (
        <div className="bg-red-300 m-2 p-3 border-solid border-black">
            <img className="w-10 h-10" src={IMG_CDN_URL+imageId}></img>
            <h4>{name}</h4>
            <p>{category}</p>
            <p>{description}</p>
            <button className="bg-blue-400 rounded-md p-1" onClick={()=>{
                addFoodItem(item)
            }}>Add To Cart</button>
        </div>
    )
}

export default MenuCard