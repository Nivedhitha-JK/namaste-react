import { CARD_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  // console.log(items.card.info.imageId);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-gray border-b-2 m-2 text-left"
        >
          <div className="item-container flex justify-between m-1 gap-1">
            <div className="w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <br />
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="3/12">
              <div className="absolute">
                <button className="p-2 bg-white shadow-lg rounded-md w-24 text-green-500 font-extrabold mx-3 mt-1">
                  Add +
                </button>
              </div>
              <img
                src={CARD_IMG + item.card.info.imageId}
                alt="img"
                className="w-32 rounded-md h-[20vh]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
