import { useContext, useEffect } from "react";
import styles from "./Modal.module.css";
import { ThemeContext } from "../../context/context";

export default function Modal({ children }) {
    const {theme} = useContext(ThemeContext);

    return <div className={styles.modal__wrapper}>{children}</div>;
}
