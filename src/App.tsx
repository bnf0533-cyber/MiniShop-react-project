import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ProductPage from "./pages/ProductPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="products/:id" element={<ProductPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
