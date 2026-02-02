import { useState, useEffect } from "react";
import Post from "../components/Post/Post";
export default function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            fetch(
                "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10",
                {
                    method: "GET",
                    mode: "cors",
                },
            )
                .then((res) => res.json())
                .then((data) => setPosts(data))
                .catch((err) => new Error(err));
        };

        fetchPosts();
    }, []);

    return (
        <article className="article">
            <div className="horizontal-line"></div>
            <h1 className="article__header">Блог</h1>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post key={post.id} title={post.title} body={post.body} />
                ))
            ) : (
                <div>Загрузка постов</div>
            )}
        </article>
    );
}
