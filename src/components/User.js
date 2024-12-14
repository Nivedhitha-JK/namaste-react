import { useState } from "react";

const UserCard = ({ name, location }) => {
  const [count, SetCount] = useState(5);
  const [count2] = useState(15);
  return (
    <div className="user-card">
      This is a User component.
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        +
      </button>
      <h1>Count2:{count2}</h1>
      <h1>User Details:</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: 9088126851</h2>
    </div>
  );
};

export default UserCard;
