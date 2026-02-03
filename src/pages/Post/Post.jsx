import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Post.module.css";

export default function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [fetchState, setFetchState] = useState("");

    useEffect(() => {
        const fetchPost = () => {
            setFetchState("fetching");
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: "GET",
                mode: "cors",
            })
                .then((res) => res.json())
                .then((data) => {
                    setPost(data);
                    setFetchState("success");
                })
                .catch((err) => {
                    setFetchState("error");
                });
        };

        fetchPost();
    }, [post]);

    console.log(post);
    

    const componentToRender = {
        "fetching": () => <p>Загрузка поста</p>,
        "error": () => <p>Ошибка сети</p>,
        "success": () => <><h1>{post.title}</h1><p>{post.body}</p></>
    }

    return (
        <article className="article">
           {fetchState !== "" && componentToRender[fetchState]()} 
        </article>
    );
}
