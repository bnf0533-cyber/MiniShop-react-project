import type { Product } from "../types/types";
import "../css/ProductCard.css";
import { Link } from "react-router";
import { useFavoriteStore } from "../store/favoritesStore";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const { favorites, addToFavorite, removeFromFavorite } = useFavoriteStore();
    const isFavorite = favorites.some((item) => item.id === product.id);
    return (
        <div className="card">
            <Link to={`/products/${product.id}`}>
                <div className="card-img">
                    <img src={product.image} alt={product.title} />
                </div>
            </Link>
            <div className="card-info">
                <div className="card-text">
                    <h3 className="card-title" title={product.title}>
                        {product.title}
                    </h3>
                    <span className="card-price">${product.price}</span>
                </div>
                <button
                    className={`card-fav ${isFavorite ? "active" : ""}`}
                    aria-label="Favorite"
                    onClick={() =>
                        isFavorite
                            ? removeFromFavorite(product.id)
                            : addToFavorite(product)
                    }
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
