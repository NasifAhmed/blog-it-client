import { cn } from "../lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

const LogInForm = ({ locationState, toast }) => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const axios = useAxios(true);

    async function handleLogIn(e) {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        // reset error
        setError("");

        toast
            .promise(signIn(email, password), {
                loading: "Logging in...",
                success: <b>Log in successful!</b>,
                error: <b>Could not log in.</b>,
            })
            .then((result) => {
                console.log(result.user);
                navigate(locationState ? locationState : "/");
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    }

    const handleGoogleSignIn = () => {
        toast
            .promise(googleSignIn(), {
                loading: "Logging in...",
                success: <b>Log in successful!</b>,
                error: <b>Could not log in.</b>,
            })
            .then((result) => {
                console.log(result.user);
                console.log("User profile created successfully");
                navigate(locationState ? locationState : "/");
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    return (
        <div className={cn("grid gap-6")}>
            <form onSubmit={handleLogIn}>
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label className="" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            required
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            required
                            name="password"
                            id="password"
                            placeholder="Type your password"
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                    {error && (
                        <p className="text-red-700">Incorrect Email/Password</p>
                    )}
                    <Button disabled={isLoading}>
                        {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Log In
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                type="button"
                disabled={isLoading}
            >
                {/* {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )} */}
                Google
            </Button>
        </div>
    );
};

export default LogInForm;
