import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "./constants";

const useMenu = (resId) => {
    const [ menu, setMenu ] = useState([])

    useEffect(() =>{
        getMenuData()
    },[])

    async function getMenuData(){
        const fetchData = await fetch(MENU_CDN_URL+resId);
        const jsonData = await fetchData.json();
        setMenu(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    
    return menu

}

export default useMenu