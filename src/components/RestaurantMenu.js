import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [ resMenu, setResMenu ] = useState({})

    const { resId } = useParams();
    useEffect(() =>{
        getMenuData()
    })

    async function getMenuData(){
        const fetchData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId="+resId)
        const jsonData = await fetchData.json();
        setResMenu(jsonData?.data?.cards[2]?.card?.card?.info)
        console.log(resMenu)
    }

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