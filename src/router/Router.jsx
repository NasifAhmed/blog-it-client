import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
]);

export default Router;
