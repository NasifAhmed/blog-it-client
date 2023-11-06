import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Blogs from "../pages/Blogs";
import Wishlist from "../pages/Wishlist";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddBlog from "../pages/AddBlog";

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
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-blog",
                element: <AddBlog></AddBlog>,
            },
        ],
    },
]);

export default Router;
