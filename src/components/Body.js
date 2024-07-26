import { restaurantData } from "../Config";
import Restaurant from "./Restaurant";
import { useState } from "react";

function filterData(searchText,restaurantList){
    return restaurantList.filter((restaurants)=>{
        restaurants.info.name.includes(searchText)
    })
    
}

const Body = () => {

    const [searchText,setSearchText] = useState("")
    const [restaurantList,setRestaurantList] = useState(restaurantData)
    return (
        <>
            <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick={()=>{
                setRestaurantList(filterData(searchText,restaurantList))
            }}>Search</button>

            <div className="body">
                {restaurantData.map((restaurant) => {
                    return <Restaurant {...restaurant.info} />
                })}
            </div>
        </>

    );
}

export default Body;