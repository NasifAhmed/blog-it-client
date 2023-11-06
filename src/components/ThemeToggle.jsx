import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const defaultTheme = "system";
    const storageKey = "ui-theme";

    const [theme, setTheme] = useState(
        () => localStorage.getItem(storageKey) || defaultTheme
    );
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [theme]);

    const setThemeHandler = (theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
    };

    return (
        <div>
            {theme === "dark" && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setThemeHandler("light")}
                >
                    <Moon />
                </Button>
            )}
            {theme === "light" && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setThemeHandler("dark")}
                >
                    <Sun />
                </Button>
            )}
        </div>
    );
};

export default ThemeToggle;
