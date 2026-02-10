import { useContext, useEffect, useState } from "react";
import { useWindowWidth } from "../../../hooks/hooks";
import Slide from "../Slide/Slide";
import "./SliderImages.css";
import { SliderContext } from "../../../context/context";

export default function SliderImages({ images }) {
    const { activeSlide } = useContext(SliderContext);
    const [translateAmount, setTranslateAmount] = useState(0);
    const windowWidth = useWindowWidth(); 

    useEffect(() => {
        const sliderWidth = document.querySelector(".slider").offsetWidth;
        const translateX = -(activeSlide * sliderWidth);
        
        setTranslateAmount(translateX);
    }, [activeSlide, windowWidth]);

    return (
        <div
            className="slider__images"
            style={{ transform: `translateX(${translateAmount}px)` }}
        >
            {images.map(({ id, src }) => (
                <Slide key={id} image={src} />
            ))}
        </div>
    );
}
