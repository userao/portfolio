import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Nav />
            <Socials />
        </footer>
    );
}
