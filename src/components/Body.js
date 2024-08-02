import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    return restaurants.filter((restaurant)=>
        restaurant.info.name.includes(searchText)
    )
}

const Body = () => {

    //  Created Three State Variables
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterdRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //  Hook Is Used For Fetching ( Which is done using other funcion )
    useEffect(()=>{
        getFetchData()
    },[])
    
    //  Function Created For Fetching Data From The Server & Initilize Values For State Variablesh
    async function getFetchData(){
        const fetchedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await fetchedData.json()
        setAllRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return filterdRestaurants.length===0?(<Shimmer />):(
        <>
            <div className="searchContainer">
                <input type="text" className="search-input" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data)
                }}>Search</button>
            </div>


            <div className="body">
                {filterdRestaurants.map((restaurant) => {
                    return (
                    <Restaurant {...restaurant.info} key={restaurant.info.id}/>
                    )
                })}
            </div>
        </>

    );
}

export default Body;