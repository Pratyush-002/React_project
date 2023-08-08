import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCards";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/Resturantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}
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
            }
           
        ],
        errorElement:<Error />
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
