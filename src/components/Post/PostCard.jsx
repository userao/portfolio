import classNames from "classnames";
import styles from "./PostCard.module.css";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/context";

export default function PostCard({ title, id }) {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    function handleClick() {
        navigate(`${id}`)
    }

    return (
        <div className={styles.post}>
           <h4 className={styles.post__header}>{title}</h4> 
           <Button label="Подробнее" className={`${ styles.post__btn } ${theme === "dark" ? 'btn-dark' : ""}`} clickHandler={handleClick}/>
        </div>
    );
}
