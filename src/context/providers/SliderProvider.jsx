import { useState } from "react";
import { SliderContext, ThemeContext } from "../context";

export default function SliderProvider({ children }) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <SliderContext value={{ activeSlide, setActiveSlide }}>
            {children}
        </SliderContext>
    );
}
