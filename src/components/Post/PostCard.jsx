import classNames from "classnames";
import styles from "./PostCard.module.css";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function PostCard({ title, id }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`${id}`)
    }

    return (
        <div className={styles.post}>
           <h4 className={styles.post__header}>{title}</h4> 
           <Button label="Подробнее" className={styles.post__btn} clickHandler={handleClick}/>
        </div>
    );
}
