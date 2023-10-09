import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCards";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/Resturantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



function AppLayout() {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
};
const approuter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/resturants/:resId",
                element:<ResturantMenu />
            },
            {
                path:"/cart",
                element:<Cart />
            }
           
        ],
        errorElement:<Error />
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
