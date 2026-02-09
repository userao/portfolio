import { useContext, useEffect, useState } from "react";
import Slide from "../Slide/Slide";
import "./SliderImages.css";
import { SliderContext } from "../../../context/context";

export default function SliderImages({ images }) {
    const { activeSlide } = useContext(SliderContext);
    const [translateAmount, setTranslateAmount] = useState(0);
    const inlineMargin = 20;

    useEffect(() => {
        const sliderWidth = document.querySelector(".slider").offsetWidth;
        const translateX = -(activeSlide * sliderWidth) - (inlineMargin * activeSlide);
        console.log(translateX);
        
        setTranslateAmount(translateX);
    }, [activeSlide]);

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
