import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Blogs from "../pages/Blogs";
import Wishlist from "../pages/Wishlist";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/wishlist",
                element: <Wishlist></Wishlist>,
            },
        ],
    },
]);

export default Router;
