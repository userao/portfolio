import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import Works from "./pages/Works/Works";

function App() {
    const ThemedLayout = ThemeWrapper(Layout);

    return (
        <ThemedLayout>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="works" element={<Works />} />
                <Route path="blog">
                    <Route index element={<Blog />} />
                    <Route path=":postId" element={<Post />} />
                </Route>
            </Routes>
        </ThemedLayout>
    );
}

export default App;
