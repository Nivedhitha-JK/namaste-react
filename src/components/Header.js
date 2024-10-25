import { HEADER_LOGO } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  console.log("Head renders");
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={HEADER_LOGO} className="imgLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn btn-primary-success"
            style={{ margin: "10px" }}
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
