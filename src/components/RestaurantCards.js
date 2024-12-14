import { CARD_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCards = (props) => {
  const { loggedInUser } = useContext(UserContext);

  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  // const {deliveryTime} = resData?.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] bg-white rounded-sm text-black flex flex-col min-h-[95%]">
      <img
        src={CARD_IMG + resData.info.cloudinaryImageId}
        alt="res-logo"
        className="rounded"
      />
      <h4 className="m-1 py-1 whitespace-normal break-words no-underline">
        {name}
      </h4>
      <p className="text-5 m-1 py-1 whitespace-normal break-words no-underline">
        {cuisines.join(",")}
      </p>
      <p className="m-1 py-1">{avgRating} stars</p>
      <p className="m-1 py-1">{costForTwo}</p>
      <p className="m-1 py-1">{sla?.slaString}</p>
      <p className="font-bold text-blue-600">{loggedInUser}</p>
    </div>
  );
};

//higher order component
//  input -> RestaurantCards component -> RestaurantCardsRating

export const withHighRating = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-400 text-white ml-[27px] mt-[5px] p-[4px] rounded-sm">
          High Rating
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
