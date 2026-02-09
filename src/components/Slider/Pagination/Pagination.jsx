import { useContext } from "react";
import "./Pagination.css";
import { SliderContext } from "../../../context/context";

export default function Pagination({ size }) {
    const { activeSlide, setActiveSlide } = useContext(SliderContext);
    const dots = [];

    for (let i = 0; i < size; i += 1) {
        const isActive = activeSlide === i;
        const dot = (
            <button
                key={i}
                className={`pagination__dot ${isActive ? "active" : ""}`}
                onClick={() => setActiveSlide(i)}
            />
        );
        dots.push(dot);
    }

    return <div className="pagination">{dots}</div>;
}
