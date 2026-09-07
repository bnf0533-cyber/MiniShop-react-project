import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/types";
import "../css/HomePage.css";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function HomePage() {
    const {
        data: products,
        loading,
        error,
    } = useFetch<Product[]>("https://fakestoreapi.com/products");
    const [search , setSearch] = useState("")
    if (!products) return <div className="status">Something wrong please check your request!</div>
    if (loading) return <div className="status">Loading...</div>;
    if (error) return <div className="status">Error...</div>;
    const filterProduct = products?.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="home">
            <h1 className="title">Products</h1>
            <SearchBar search={search} setSearch={setSearch}/>
            <div className="grid">
                {filterProduct?.length === 0 && (
                    <div className="search-error"> PRODUCT NOT FOUND</div>
                )}
                {filterProduct?.map((d) => (
                    <ProductCard key={d.id} product={d} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
