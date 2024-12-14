import logo from "../utils/logo.png";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  console.log("Head renders");

  const { loggedInUser } = useContext(UserContext);
  console.log("ContextData", loggedInUser);
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-white">
      <div className="flex justify-start items-center">
        <img src={logo} className="w-[200px] p-2" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 m-3 items-center whitespace-nowrap">
          <li className="px-3 text-customGray font-medium">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-3">
            <Link to="/" className="text-customGray no-underline font-medium">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/about"
              className="text-customGray no-underline font-medium"
            >
              About Us
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/contact"
              className="text-customGray no-underline font-medium"
            >
              Contact Us
            </Link>
          </li>

          <li className="px-3">
            <Link
              to="/grocery"
              className="text-customGray no-underline font-medium"
            >
              Grocery
            </Link>
          </li>
          <li className="text-customGray font-medium px-3">Cart</li>

          <button
            className="text-customGray font-medium bg-orange-400 px-3 py-1 rounded-sm"
            style={{ margin: "10px" }}
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="text-customGray font-medium px-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
