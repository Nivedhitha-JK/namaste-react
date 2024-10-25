import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESMENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, SetresInfo] = useState(null);
  const [showmenu, SetShowMenu] = useState(false);
  const [showsalad, SetShowSalad] = useState(false);
  const [showNVsalad, SetShowNvSalad] = useState(false);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(RESMENU_API + resId);

    let json = await data.json();
    console.log(json);
    SetresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { title: title1 } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { title: title2 } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { title: title3 } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  const { name: recommendedDish, price } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[1]?.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];
  const { itemCards: itemCards2 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
  const { itemCards: itemCards3 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || [];

  return (
    <div className="resMenu">
      <div className="container">
        <div className="pathRes">
          <p>/Home/Bangalore/{name}</p>
        </div>

        <h3>
          <b>{name}</b>
        </h3>
        <div className="card1">
          <div className="cardIn">
            <div className="starDiv">
              <i className="fa-solid fa-star"></i>
            </div>
            &nbsp;
            <div className="ratingDiv">
              <p>4.6 (3.5K+ ratings)</p>
            </div>
            &nbsp;
            <div className="dotDiv">
              <p>.</p>
            </div>
            &nbsp;
            <div className="costDiv">
              <p>Rs.500 For Two</p>
            </div>
          </div>
          <div className="cardIn1">
            <p>Salads</p>
          </div>
          <div className="cardIn2">
            <div className="arrowLines">
              <i className="fa-solid fa-location-crosshairs"></i>
            </div>
            &nbsp;&nbsp;
            <div className="location">
              <div className="locationName">
                <p>
                  <b>Outlet</b>
                </p>
                &nbsp;&nbsp;
                <p>
                  HSR <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div className="locationName">
                <p>
                  <b>25-30 mins</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div>
          <div className="recommended" onClick={() => SetShowMenu(!showmenu)}>
            <h3>
              <b>{title1}</b>
            </h3>
            <h3>
              <i
                className={`fa-solid ${
                  showmenu ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </h3>
          </div>
        </div>

        {showmenu && (
          <div>
            <div className="recommendedDish">
              {itemCards.map((item) => (
                <div className="topDiv" key={item.card.info.id}>
                  <div className="innerDiv">
                    <div className="div1">
                      <div className="bestSellerDiv">
                        <i
                          className="fa-solid fa-square-caret-up"
                          style={{ color: "#fe2a2a", marginTop: "3px" }}
                        ></i>
                        <p style={{ color: "orange", fontSize: "small" }}>
                          Best Seller
                        </p>
                      </div>
                      <div className="dishName">
                        <h6>
                          <b>{item.card.info.name}</b>
                        </h6>
                        <p>
                          <b>
                            {item.card.info.ratings.aggregatedRating.rating}
                            &nbsp;(
                            {
                              item.card.info.ratings.aggregatedRating
                                .ratingCountV2
                            }
                            )
                          </b>
                        </p>
                      </div>
                      <div className="description">
                        <p>{item.card.info.description}</p>
                      </div>
                    </div>
                    <div className="div2">
                      <p>image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  */}
        <hr></hr>
        <div>
          <div className="recommended" onClick={() => SetShowSalad(!showsalad)}>
            <h5>
              <b>{title2}</b>
            </h5>
            <h3>
              <i
                className={`fa-solid ${
                  showsalad ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </h3>
          </div>
        </div>

        {showsalad && (
          <div>
            <div className="recommendedDish">
              {itemCards2.map((item) => (
                <div className="topDiv" key={item.card.info.id}>
                  <div className="innerDiv">
                    <div className="div1">
                      <div className="bestSellerDiv">
                        <i
                          className="fa-solid fa-square-caret-up"
                          style={{ color: "#fe2a2a", marginTop: "3px" }}
                        ></i>
                        <p style={{ color: "orange", fontSize: "small" }}>
                          Best Seller
                        </p>
                      </div>
                      <div className="dishName">
                        <h6>
                          <b>{item.card.info.name}</b>
                        </h6>
                        <p>
                          <b>
                            {item.card.info.ratings.aggregatedRating.rating}
                            &nbsp;(
                            {
                              item.card.info.ratings.aggregatedRating
                                .ratingCountV2
                            }
                            )
                          </b>
                        </p>
                      </div>
                      <div className="description">
                        <p>{item.card.info.description}</p>
                      </div>
                    </div>
                    <div className="div2">
                      <p>image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr></hr>

        <div
          className="recommended"
          onClick={() => SetShowNvSalad(!showNVsalad)}
        >
          <h5>
            <b>{title3}</b>
          </h5>
          <h3>
            <i
              className={`fa-solid ${
                showNVsalad ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </h3>
        </div>

        {showNVsalad && (
          <div>
            <div className="recommendedDish">
              {itemCards3.map((item) => (
                <div className="topDiv" key={item.card.info.id}>
                  <div className="innerDiv">
                    <div className="div1">
                      <div className="bestSellerDiv">
                        <i
                          className="fa-solid fa-square-caret-up"
                          style={{ color: "#fe2a2a", marginTop: "3px" }}
                        ></i>
                        <p style={{ color: "orange", fontSize: "small" }}>
                          Best Seller
                        </p>
                      </div>
                      <div className="dishName">
                        <h6>
                          <b>{item.card.info.name}</b>
                        </h6>
                        <p>
                          <b>
                            {item.card.info.ratings.aggregatedRating.rating}
                            &nbsp;(
                            {
                              item.card.info.ratings.aggregatedRating
                                .ratingCountV2
                            }
                            )
                          </b>
                        </p>
                      </div>
                      <div className="description">
                        <p>{item.card.info.description}</p>
                      </div>
                    </div>
                    <div className="div2">
                      <p>image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
