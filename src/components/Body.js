import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import { LIST_CDN_URL } from "../utils/Config";
import useOnline from "../utils/useOnline";




const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterdRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getFetchData()
    },[])
    
    async function getFetchData(){
        const fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await fetchedData.json()
        console.log(jsonData)
        setAllRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline()
    if(!isOnline){
        return <h4>Your wifi sucks</h4>
    }
    return filterdRestaurants.length===0 ? (<Shimmer />):(
        <>
            <div className="flex justify justify-center">
                <input type="text" 
                        className="border border-spacing-3 border-cyan-500" 
                        value={searchText} 
                        onChange={(e) => { setSearchText(e.target.value) }}>
                </input>
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data)
                }}>Search</button>
            </div>

            <div className="flex flex-wrap bg-yellow-200 m-4">
                {filterdRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default Body;