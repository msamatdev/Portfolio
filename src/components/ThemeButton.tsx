"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeButton() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <button 
        className="fixed right-12 bottom-12 border-primary border-[3px] bg-background p-2 rounded-full shadow-md"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <Sun className="size-8" />
            ) : (
                <Moon className="size-8" />
            )}
        </button>
    );
}