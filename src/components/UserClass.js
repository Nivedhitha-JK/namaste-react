import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // here you will get props object
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + " Constructor called");
  }

  async componentDidMount() {
    // console.log(this.props.name + " component Mounted");
    //API CALL

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    // update state variable
    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log("component Did mount");
  }

  componentDidUpdate() {
    console.log("component Did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // console.log(this.props.name + " Render called");

    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>User Details:</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
