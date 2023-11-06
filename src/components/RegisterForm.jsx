import { cn } from "../lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const LogInForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={cn("grid gap-6")}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label className="" htmlFor="photoUrl">
                            Photo URL
                        </Label>
                        <Input
                            id="photoUrl"
                            placeholder="URL of your photo"
                            type="url"
                            disabled={isLoading}
                        />
                        <Label className="" htmlFor="email">
                            Email
                        </Label>
                        <Input
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

export default LogInForm;
