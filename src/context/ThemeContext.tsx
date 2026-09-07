import { createContext,  useState, type ReactNode } from "react";
type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
