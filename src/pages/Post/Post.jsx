import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [fetchState, setFetchState] = useState("idle");

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
  }, []);

  console.log(fetchState);

  const componentToRender = {
    idle: () => null,
    fetching: () => <p>Загрузка поста</p>,
    error: () => <p>Ошибка сети</p>,
    success: () => (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    ),
  };

  return <article className="article">{componentToRender[fetchState]()}</article>;
}
