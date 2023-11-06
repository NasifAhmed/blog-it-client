import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center font-medium text-lg mb-20">
            <div>LOGO</div>
            <div className="flex justify-between items-center gap-10 text-muted-foreground">
                <NavLink
                    to={`/`}
                    className={"transition-colors hover:text-primary"}
                >
                    Home
                </NavLink>
                <NavLink
                    to={`/blogs`}
                    className={"transition-colors hover:text-primary"}
                >
                    Blogs
                </NavLink>
                <NavLink
                    to={`/wishlist`}
                    className={"transition-colors hover:text-primary"}
                >
                    Wishlist
                </NavLink>
            </div>
            <div className="flex justify-between items-center gap-10">
                <ThemeToggle></ThemeToggle>
            </div>
        </nav>
    );
};

export default NavBar;
