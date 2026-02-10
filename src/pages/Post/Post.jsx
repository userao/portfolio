import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

export default function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [fetchState, setFetchState] = useState("idle");

    useEffect(() => {
        const fetchPost = () => {
            setFetchState("fetching");
            return fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`,
                {
                    method: "GET",
                    mode: "cors",
                },
            )
                .then((res) => res.json())
                .then((data) => {
                    setFetchState("success");
                    return data;
                })
                .catch(() => {
                    setFetchState("error");
                });
        };

        fetchPost().then((post) => setPost(post));
    }, [postId]);

    const componentToRender = {
        idle: () => null,
        fetching: () => <Spinner />,
        error: () => <p>Ошибка сети</p>,
        success: () => (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
        ),
    };

    return (
        <article className="article">{componentToRender[fetchState]()}</article>
    );
}
