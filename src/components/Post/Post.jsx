import classNames from "classnames";
import styles from "./Post.module.css";
import { useState } from "react";

export default function Post({ title, body }) {
    const [expanded, setExpanded] = useState(false);
    const classes = classNames(
        styles.post__body,
        expanded ? styles["post__body-expanded"] : "",
    );

    return (
        <div className={styles.post}>
            <h3 className={styles.post__header}>{title}</h3>
            <p className={classes}>{body}</p>
            <button
                className={styles["post-btn"]}
                onClick={() => setExpanded((prev) => !prev)}
            />
        </div>
    );
}
