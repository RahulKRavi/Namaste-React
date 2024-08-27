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
        <div className="">
            <img className="float-left w-1/2 h-40 object-contain rounded-3xl" src={IMG_CDN_URL+imageId}></img>
            <h4>{name}</h4>
            <p>{category}</p>
            <button className="bg-blue-400 rounded-md p-1" onClick={()=>{
                addFoodItem(item)
            }}>Add To Cart</button>
        </div>
    )
}

export default MenuCard