import cn from "classnames";
import "./Button.css";

export default function Button({label, className, clickHandler, type="button"}) {
   const classes = cn('btn', className)
   
   return <button onClick={clickHandler} className={classes} type={type}>{label}</button> 
}