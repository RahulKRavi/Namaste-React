import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const clearCartItems = ()=>{
        dispatch(clearCart())
    }
    return (
        <div>
            <button className="bg-blue-400 rounded-md p-1" onClick={()=>{
                clearCartItems()
            }}>CLEAR ALL</button>
            {cartItems.map((item)=>{
                const {name,description,imageId,category}= item;
                return (
                    <div className="bg-red-300 m-2 p-3 border-solid border-black">
                        <img className="w-10 h-10" src={IMG_CDN_URL + imageId}></img>
                        <h4>{name}</h4>
                        <p>{category}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Cart;