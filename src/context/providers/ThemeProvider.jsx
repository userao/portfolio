import { useContext, useState } from "react";
import { ThemeContext } from "../context";

export default function ThemeProvider({children}) {
    const [theme,setTheme] = useState('light');

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
       
    return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext> 
}