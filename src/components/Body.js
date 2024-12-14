import React, { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import RestaurantCards, { withHighRating } from "./RestaurantCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [resDataList, setresDataList] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");

  //using usercontext

  const { loggedInUser, setuserName } = useContext(UserContext);

  console.log("Body rendered res list", resDataList);

  const RestaurantCardRating = withHighRating(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("Fetched Data: ", json); // api data json
    const apiData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(apiData); // extract restaurants from api data
    setresDataList(apiData);
    setfilterData(apiData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline...! Please check your Internet connection
      </h1>
    );

  return resDataList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-bodyGray">
      <div className="flex bg-bodyGray">
        <div className="searchDiv m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black outline-none p-1 rounded-sm"
            value={searchTxt}
            onChange={(e) => setsearchTxt(e.target.value)}
          />
          <button
            className="bg-slate-300 px-1 py-1 w-40 m-4 rounded-sm"
            type="submit"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              console.log(searchTxt);
              const filteredRestaurant = resDataList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              console.log(filteredRestaurant);
              setfilterData(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 m-3 rounded-sm"
            onClick={() => {
              console.log("Button clicked");
              console.log(resDataList);

              const filterData = resDataList.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(filterData);
              setfilterData(filterData);
            }}
          >
            Top Rated Restaurants
          </button>

          <div>
            <label>User Name:</label>&nbsp;
            <input
              className="border-none p-1 outline-none rounded-sm"
              value={loggedInUser}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="no-underline"
          >
            {/* if the restaurant is greater than 4 rating */}
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardRating resData={restaurant} className="flex" />
            ) : (
              <RestaurantCards resData={restaurant} className="flex" />
            )}
            {/* <RestaurantCards resData={restaurant} className="flex" /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
