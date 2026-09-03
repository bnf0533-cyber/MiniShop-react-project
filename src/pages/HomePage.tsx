import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";
import "../css/HomePage.css";

function HomePage() {
    const {
        data: products,
        loading,
        error,
    } = useFetch<Product[]>("https://fakestoreapi.com/products");

    if (loading) return <div className="status">Loading...</div>;
    if (error) return <div className="status">Error...</div>;

    return (
        <div className="home">
            <h1 className="title">Products</h1>
            <div className="grid">
                {products?.map((d) => (
                    <ProductCard key={d.id} product={d} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
