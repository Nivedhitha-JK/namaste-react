import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, SetresInfo] = useState(null);

  const [showIndex, setshowIndex] = useState(null);

  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo); // whole api response

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //  filter out the item categories data that is need to render on the UI

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <div className="container">
        <div className="flex ml-[130px]">
          <p className="text-xs mr-28">/Home/Bangalore/{name}</p>
        </div>
        <div className="p-2 flex ml-[150px]">
          <h3>
            <b>{name}</b>
          </h3>
        </div>

        <div className="ml-[180px] p-2 flex flex-col border-2 border-2-gray-100 rounded-2xl w-[750px]">
          <div className="flex">
            <div className="starDiv">
              <i className="fa-solid fa-star"></i>
            </div>
            &nbsp;
            <div className="ratingDiv">
              <p className="font-bold">4.6 (3.5K+ ratings)</p>
            </div>
            &nbsp;
            <div className="dotDiv">
              <p className="font-bold text-gray-500">.</p>
            </div>
            &nbsp;
            <div className="costDiv">
              <p className="font-bold">Rs.500 For Two</p>
            </div>
          </div>
          <div className="flex">
            <p className="font-bold text-orange-500 underline">Salads</p>
          </div>
          <div className="flex">
            <div className="arrowLines">
              <i className="fa-solid fa-location-crosshairs"></i>
            </div>
            &nbsp;&nbsp;
            <div>
              <div className="p-2">
                <p className="m-0">
                  <b>Outlet</b>
                </p>

                <p className="m-0">
                  HSR <i className="fa-solid fa-caret-down mt-14px"></i>
                </p>
              </div>
              <div className="p-2">
                <p className="ml-10 mb-0">
                  <b>25-30 mins</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* categories accordion */}
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card.title}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
