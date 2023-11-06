import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const authContext = useContext(AuthContext);
    const { user, loading } = authContext;
    const location = useLocation();
    console.log(location.pathname);

    if (authContext === null) {
        return <Navigate state={location.pathname} to="/register"></Navigate>;
    }

    // if (loading) {
    //     return <span className="loading loading-infinity loading-lg"></span>;
    // }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
