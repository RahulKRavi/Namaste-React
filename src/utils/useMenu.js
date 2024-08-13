import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "../utils/Config";

const useMenu = (resId) => {
    const [ resMenu, setResMenu ] = useState({})

    useEffect(() =>{
        getMenuData()
    })

    async function getMenuData(){
        const fetchData = await fetch(MENU_CDN_URL+resId)
        const jsonData = await fetchData.json();
        setResMenu(jsonData?.data?.cards[2]?.card?.card?.info)
    }

    return resMenu

}

export default useMenu