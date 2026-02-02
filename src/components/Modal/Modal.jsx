import { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children }) {

    return <div className={styles.modal__wrapper}>{children}</div>;
}
