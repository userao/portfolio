import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";

export default function Works() {
    const apiUrl = "https://api.vecteezy.com/v2/64324/resources/";
    const imageIds = ["2198834", "21721083", "7290560", "22922647", "2408045"];
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchDownloadUrl = async (id) => {
            return fetch(`${apiUrl}${id}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: "Bearer Xpv4wnqz6zPZYaFsDxp9Jp8X",
                },
            })
                .then((res) => res.json())
                .then((data) => ({ id, url: data["thumbnail_2x_url"] }));
        };

        const fetchImage = async (url) =>
            fetch(url)
                .then((res) => res.blob())
                .then((blob) => URL.createObjectURL(blob));

        const getImages = async () => {
            const downloadUrls = await Promise.all(
                imageIds.map((id) => fetchDownloadUrl(id)),
            );
            const images = await Promise.all(
                downloadUrls.map(async ({ id, url }) => {
                    const image = await fetchImage(url);
                    return { id, src: image };
                }),
            );

            return images;
        };

        getImages().then((images) => setImages(images));
    }, []);

    return (
        <article className="article">
            {images.length > 0 && <Slider images={images} />}
        </article>
    );
}
