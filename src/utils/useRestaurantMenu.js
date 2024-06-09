import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) =>{
  const [resInfo, setResInfo] = useState([]);
  useEffect(
    ()=>{resData()},[]
  );

  const resData = async () => {
  const data = await fetch(MENU_URL + resId);
  const json = await data.json();
  setResInfo(json);
  }
  
  return resInfo;
}

export default useRestaurantMenu;