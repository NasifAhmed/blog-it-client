import { createBrowserRouter, useParams } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Blogs from "../pages/Blogs";
import Wishlist from "../pages/Wishlist";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddBlog from "../pages/AddBlog";
import PrivateRoute from "./PrivateRouter";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";
import Featured from "../pages/Featured";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
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
                path: "/featured",
                element: <Featured></Featured>,
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
                element: (
                    <PrivateRoute>
                        <AddBlog></AddBlog>
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs/:id",
                element: <BlogDetails></BlogDetails>,
            },
            {
                path: "/update-blog/:id",
                element: (
                    <PrivateRoute>
                        <UpdateBlog></UpdateBlog>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default Router;
