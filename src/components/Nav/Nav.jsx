import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
    const MENU = [
        { title: "На главную", to: "/", id: uuid() },
        { title: "Работы", to: "works", id: uuid() },
        { title: "Отзывы", to: "testimonials", id: uuid() },
        { title: "Блог", to: "blog", id: uuid() },
    ];

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {MENU.map((item) => (
                    <li key={item.id}>
                        <Link to={item.to}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
