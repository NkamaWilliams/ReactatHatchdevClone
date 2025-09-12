import { useContext } from "react"
import "./App.css"
import { ThemeContext } from "./theme-provider"
export default function THemeCard(
    {children}: 
{
    children?: React.ReactNode
}) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="profile">
            <h1>Theme Card</h1>
            <p>{theme} Mode</p>
            <ThemeSwitcher />
        </div>
    )
}

const ThemeSwitcher = () => {
    const {toLight, toDark} = useContext(ThemeContext);
    return(
        <div>
            <button onClick={toLight}>Light Mode</button> {' '}
            <button onClick={toDark}>Dark Mode</button>
        </div>
    )
}