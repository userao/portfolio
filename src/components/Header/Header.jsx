import Nav from "../Nav/Nav";
import styles from "./Header.module.css";
import { useWindowWidth } from "../../hooks/hooks";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
    const width = useWindowWidth();

    return (
        <header className={styles.header}>
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
