import { useContext, useState } from "react";
import styles from "./BurgerMenu.module.css";
import classNames from "classnames";
import Nav from "../Nav/Nav";
import { ThemeContext } from "../../context/context";

export default function BurgerMenu() {
    const {theme} = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const classes = classNames(styles["burger-btn"], styles[theme]);

    function handleClick() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <button className={classes} onClick={handleClick}>
            {isExpanded ? (
                <i class="fa-solid fa-x"></i>
            ) : (
                <i className="fa-solid fa-bars" />
            )}
            {isExpanded && <Nav />}
        </button>
    );
}
