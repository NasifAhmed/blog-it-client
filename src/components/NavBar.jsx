import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useAxios } from "../hooks/useAxios";

const NavBar = () => {
    // [dropDownState, setDropDownState] = useState([]);

    const { user, logOut, setTokenState, tokenState } = useContext(AuthContext);
    const axios = useAxios(true);
    const navigate = useNavigate();
    const handleLogOut = () => {
        const userEmail = user.email;
        logOut()
            .then((res) => {
                if (tokenState) {
                    axios
                        .post(
                            "/delete-token",
                            { email: userEmail },
                            { withCredentials: true }
                        )
                        .then((res) => {
                            console.log(
                                `Token delete response ${JSON.stringify(res)}`
                            );
                            setTokenState(false);
                        });
                }
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <nav className="flex justify-between items-center font-medium text-lg mb-20">
            <div className="flex-1 mr-auto flex gap-2">
                <Avatar className="mr-2">
                    <AvatarImage src="https://i.ibb.co/NmRFDbN/logo.png" />
                </Avatar>
                <h1>Blog.it</h1>
            </div>
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
                    to={`/featured`}
                    className={"transition-colors hover:text-primary"}
                >
                    Featured Blogs
                </NavLink>
                {user && (
                    <>
                        <NavLink
                            to={`/add-blog`}
                            className={"transition-colors hover:text-primary"}
                        >
                            Add Blog
                        </NavLink>
                        <NavLink
                            to={`/wishlist`}
                            className={"transition-colors hover:text-primary"}
                        >
                            Wishlist
                        </NavLink>
                    </>
                )}
            </div>
            <div className="flex flex-1 ml-auto justify-end items-center gap-1">
                {user ? (
                    <>
                        <Avatar className="mr-2">
                            <AvatarImage src={user.photoURL} />
                            <AvatarFallback>
                                <img
                                    src="https://i.ibb.co/dWbbNfk/fallback.png"
                                    alt=""
                                />
                            </AvatarFallback>
                        </Avatar>

                        <span className="mr-5">{user.displayName}</span>
                        <Button
                            className="hidden md:block"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            className="hidden md:block"
                            onClick={() => navigate("/login")}
                        >
                            Log In
                        </Button>
                        <Button
                            className="hidden md:block"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                    </>
                )}

                <ThemeToggle></ThemeToggle>
                <DropdownMenu className="z-50">
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
                                onClick={() => navigate("/blogs")}
                            >
                                Feature Blogs
                            </Button>
                        </DropdownMenuItem>

                        {user && (
                            <>
                                <DropdownMenuItem>
                                    <Button
                                        variant="ghost"
                                        onClick={() => navigate("/wishlist")}
                                    >
                                        Wishlist
                                    </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Button
                                        variant="ghost"
                                        onClick={() => navigate("/add-blog")}
                                    >
                                        Add Blog
                                    </Button>
                                </DropdownMenuItem>
                            </>
                        )}
                        <DropdownMenuItem>
                            {user ? (
                                <>
                                    <Button
                                        className=" md:hidden"
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        className=" md:hidden"
                                        onClick={() => navigate("/login")}
                                    >
                                        Log In
                                    </Button>
                                    <Button
                                        className=" md:hidden"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default NavBar;
