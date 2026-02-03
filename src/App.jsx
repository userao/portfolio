import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/context";

function App() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const prevTheme = theme === "light" ? "dark" : "light";
        const root = document.querySelector("#root");
        console.log(prevTheme, theme);
        root.classList.add(theme);
        root.classList.remove(prevTheme);
    }, [theme]);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="blog">
                    <Route index element={<Blog />} />
                    <Route path=":postId" element={<Post />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default App;
