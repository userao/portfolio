import { useState, useEffect } from "react";
import PostCard from "../../components/Post/PostCard";
import "./Blog.css";
export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [fetchState, setFetchState] = useState("");
    useEffect(() => {
        const fetchPosts = async () => {
            setFetchState("fetching");
            return fetch(
                "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20",
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

        fetchPosts().then((posts) => setPosts(posts));
    }, []);

    const componentToRender = {
        fetching: () => <p>Загрузка постов</p>,
        error: () => <p>Ошибка сети</p>,
        success: () =>
            posts.map((post) => (
                <PostCard key={post.id} title={post.title} id={post.id} />
            )),
    };

    return (
        <article className="article">
            <div className="horizontal-line"></div>
            <h1 className="article__header">Блог</h1>
            <div className="post-cards">
                {fetchState !== "" && componentToRender[fetchState]()}
            </div>
        </article>
    );
}
