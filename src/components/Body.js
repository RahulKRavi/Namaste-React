import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import { LIST_CDN_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterdRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getFetchData()
    },[])
    
    async function getFetchData(){
        const fetchedData = await fetch(LIST_CDN_URL);
        const jsonData = await fetchedData.json()
        setAllRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline()
    if(!isOnline){
        return <h4>Your wifi sucks</h4>
    }
    
    return filterdRestaurants.length===0 ? (<Shimmer />):(
        <>
            <div className="flex">
                <div className="w-1/3">
                </div>
                <div className="w-1/3">
                    <h1 className="font-extrabold text-slate-500 text-4xl">TOP RESTAURANTS</h1>
                </div>
                <div className="self-center">
                    <input className="border border-spacing-3 border-cyan-500"
                        type="text"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}>
                    </input>
                    <button className=""
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data)
                        }}>Search</button>

                </div>


            </div>
            <div className="grid grid-cols-4 justify-around">
                {filterdRestaurants.map((restaurant) => {
                    return (
                        <div className="h-72 m-5 p-5 bg-slate-400 rounded-md hover:outline outline-offset-4" key={restaurant.info.id}>
                            <Link to={"/restaurant/" + restaurant.info.id} >
                                <RestaurantCard {...restaurant.info} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Body;