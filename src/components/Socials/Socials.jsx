import { Link } from "react-router-dom";
import styles from "./Socials.module.css"

export default function Socials() {
    return (
        <div className={styles.socials}>
            <Link to="#"><i className="fa-brands fa-square-dribbble"></i></Link>
            <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="#"><i className="fa-brands fa-square-x-twitter"></i></Link>
            <Link to="#"><i className="fa-brands fa-square-instagram"></i></Link>
        </div>
    );
}
