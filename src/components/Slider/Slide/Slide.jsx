import "./Slide.css";

export default function Slide({ image }) {
    return (
        <div className="slide">
            <img className="slide__image" src={image}></img>
        </div>
    );
}
