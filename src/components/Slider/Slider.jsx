import Slide from "./Slide/Slide";
import Pagination from "./Pagination/Pagination";
import SliderProvider from "../../context/providers/SliderProvider";
import "./Slider.css";
import SliderImages from "./SliderImages/SliderImages";

export default function Slider({ images }) {
    return (
        <SliderProvider>
            <div className="slider">
                <SliderImages images={images} />
                <Pagination size={images.length} />
            </div>
        </SliderProvider>
    );
}
