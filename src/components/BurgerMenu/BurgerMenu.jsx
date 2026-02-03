import { useState } from "react";
import styles from "./BurgerMenu.module.css";
import classNames from "classnames";
import Nav from "../Nav/Nav";

export default function BurgerMenu() {
    const [isExpanded, setIsExpanded] = useState(false);
    const classes = classNames(styles["burger-btn"], {
        [styles.expanded]: isExpanded,
    });

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
