import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCards from "./RestaurantCards";
import { Link } from "react-router-dom";
const Body = () => {
  const [resDataList, setresDataList] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("Fetched Data: ", json);
    const apiData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setresDataList(apiData);
    setfilterData(apiData);
  };

  return resDataList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="searchDiv">
          <input
            type="search"
            className="searchInput me-2"
            style={{ backgroundColor: "black", color: "white" }}
            value={searchTxt}
            onChange={(e) => setsearchTxt(e.target.value)}
          />
          <button
            className="searchBtn btn btn-outline-success"
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

        <button
          className="filter_btn"
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
      </div>
      <div className="res-container">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
