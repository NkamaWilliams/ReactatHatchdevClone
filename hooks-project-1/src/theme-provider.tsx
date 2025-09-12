import { createContext, useState } from "react"  

interface ThemeContextProps {
    theme: string,
    toLight: () => void,
    toDark: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setThemeState] = useState("light");
    const toLight = () => {
        setThemeState("light");
    }
    const toDark = () => {
        setThemeState("dark");
    }
    return(
        <ThemeContext.Provider value={{
            theme,
            toLight,
            toDark,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}