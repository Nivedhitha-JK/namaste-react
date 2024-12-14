import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "John Durairaj",
    };
    setuserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
      <div className="app">
        <Header />
        {/* <UserContext.Provider value={{ loggedInUser: "Elon musk" }}>
        </UserContext.Provider> */}
        {/* Here we've to write the condition baes on the route the component have to change
     for that react gives us a Outlet component, this outlet component is getting replaced according to the route
 */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          // <Suspense fallback={<h1>Loading...!</h1>}>
          <Grocery />
          // </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
