import { useContext } from "react";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.css";
import { ThemeContext } from "../../context/context";

export default function Footer() {
    const {theme} = useContext(ThemeContext);

    return (
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <Nav />
            <Socials />
        </footer>
    );
}
