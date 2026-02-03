import { useEffect, useState } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setWidth(width);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    return width;
}

export { useWindowWidth };
