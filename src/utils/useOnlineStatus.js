import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check the online status using event listener
  //here we don't need any contract like no input from component

  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });

  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });

  return onlineStatus;
};

export default useOnlineStatus;
