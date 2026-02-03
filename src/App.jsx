import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";

function App() {
  

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
