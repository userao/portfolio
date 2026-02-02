import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <h1 className={styles.header__name}>Андрей&nbsp;Остапенко</h1>
                <Nav />
                <button className={styles.header__btn}>Связаться</button>
            </div>
        </header>
    );
}
