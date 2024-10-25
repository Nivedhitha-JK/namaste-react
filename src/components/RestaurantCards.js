import { CARD_IMG } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  // const {deliveryTime} = resData?.info.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f2f2f2" }}>
      <img
        src={CARD_IMG + resData.info.cloudinaryImageId}
        alt="res-logo"
        className="res-img img-fluid"
      />
      <h4 style={{ margin: "5px" }}>{name}</h4>
      <p style={{ fontSize: "10px", margin: "5px" }}>{cuisines.join(",")}</p>
      <p style={{ margin: "5px" }}>{avgRating} stars</p>
      <p style={{ margin: "5px" }}>{costForTwo}</p>
      <p style={{ margin: "5px" }}>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCards;
