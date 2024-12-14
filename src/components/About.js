import UserCard from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import Contact from "./Contact";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component mount");
    // setInterval(() => {
    //   console.log("Namaste React");
    // }, 1000);
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us page...!</h1>
        <div>
          LoggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-blue-700">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        {/* <Contact /> */}
        {/* <UserCard
          name={"Lillyyyy (function component)"}
          location={"Madurai (function)"}
        /> */}
        <hr></hr>
        <br></br>
        <UserClass name={"first child"} location={"London"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us page...!</h1>
//       <UserCard
//         name={"Lillyyyy (function component)"}
//         location={"Madurai (function)"}
//       />
//       <hr></hr>
//       <br></br>
//       <UserClass
//         name={"Charlie (class component)"}
//         location={"Madurai (class)"}
//       />
//     </div>
//   );
// };

export default About;
