import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const NavBar = () => {
    // [dropDownState, setDropDownState] = useState([]);

    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center font-medium text-lg mb-20">
            <div>LOGO</div>
            <div className="md:flex justify-between items-center gap-10 text-muted-foreground hidden">
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
            <div className="flex justify-between items-center gap-1">
                <ThemeToggle></ThemeToggle>
                <DropdownMenu>
                    <DropdownMenuTrigger className="md:hidden">
                        <Button variant="outline" size="icon">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background">
                        <DropdownMenuItem>
                            <Button
                                variant="ghost"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant="ghost"
                                onClick={() => navigate("/blogs")}
                            >
                                Blogs
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button
                                variant="ghost"
                                onClick={() => navigate("/wishlist")}
                            >
                                Wishlist
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default NavBar;
