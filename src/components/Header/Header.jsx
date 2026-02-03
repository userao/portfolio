import { useContext } from "react";
import Nav from "../Nav/Nav";
import { useWindowWidth } from "../../hooks/hooks";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/context";

export default function Header() {
    const width = useWindowWidth();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`${ styles.header } ${ styles[theme] }`}>
            <button className={styles["theme-btn"]} onClick={toggleTheme}>
                {theme === "light" ? (
                    <i className="fa-solid fa-moon" />
                ) : (
                    <i className="fa-solid fa-sun"></i>
                )}
            </button>
            <div className={styles.wrapper}>
                <h1 className={styles.header__name}>Андрей&nbsp;Остапенко</h1>
                {width > 768 ? (
                    <>
                        <Nav />
                        <button className={styles.header__btn}>
                            Связаться
                        </button>
                    </>
                ) : (
                    <BurgerMenu />
                )}
            </div>
        </header>
    );
}
