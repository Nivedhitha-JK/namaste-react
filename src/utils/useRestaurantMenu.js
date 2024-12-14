import { useEffect, useState } from "react";
import { RESMENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  //state variable
  const [resInfo, setResInfo] = useState(null);

  // fetching the data from the api
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESMENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
