import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleclick = () => {
    console.log("clicked");
    setshowIndex();
    // setShowItems(!showItems);
  };

  console.log(data); // here we get data to render through props
  return (
    <div
      className="w-[65%] mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-md cursor-pointer"
      onClick={handleclick}
    >
      {/*  accordion header */}
      <div className=" flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>▼</span>
      </div>

      {/* accordion body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
