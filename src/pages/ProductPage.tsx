import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/types";
import ProductDetails from "../components/ProductDetails";
import "../css/ProductPage.css";

function ProductPage() {
    const { id } = useParams();
    const {
        data: product,
        loading,
        error,
    } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`);

    if (loading)
        return <div className="loading-page">Loading please wait...</div>;
    if (error) return <div className="error-page">Error please try again!</div>;
    if (!product) return <div>Product not found</div>;

    return <ProductDetails product={product} />;
}

export default ProductPage;
