import { cn } from "../lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const RegisterForm = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
        const name = form.get("name");
        const photoURL = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photoURL, email, password);
        // reset error
        setError("");
        if (password.length < 6) {
            setError("Error: Password should be 6+ characters long !");
        }
        //else if (/^[^A-Z]*$/.test(password)) {
        //     setError(
        //         "Error: Password should have at lease one capital letter !"
        //     );
        // } else if (/^[a-zA-Z0-9]*$/.test(password)) {
        //     setError(
        //         "Error: Password should have at lease one special character !"
        //     );
        // }
        if (error === "") {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    updateUser(result.user, name, photoURL)
                        .then(() => {
                            console.log("User profile updated successfully");
                        })
                        .catch((error) => {
                            console.error(
                                "Error updating user profile:",
                                error
                            );
                            setError(error.message);
                        });
                })
                .catch((error) => {
                    console.error(error);
                    setError(error.message);
                });
        }
    };

    return (
        <div className={cn("grid gap-6")}>
            <form onSubmit={handleRegister}>
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label className="" htmlFor="name">
                            Name
                        </Label>
                        <Input
                            required
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            type="text"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="photoUrl">
                            Photo URL
                        </Label>
                        <Input
                            name="photoUrl"
                            id="photoUrl"
                            placeholder="URL of your photo"
                            type="url"
                            disabled={isLoading}
                        />
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
                    <Button disabled={isLoading}>
                        {/* {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
