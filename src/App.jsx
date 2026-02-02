import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Blog from "./pages/Blog";

function App() {
  

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="blog" element={<Blog />} />
            </Routes>
        </Layout>
    );
}

export default App;
