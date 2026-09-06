import { useNavigate } from "react-router";
import type { Product } from "../types/types";
import "../css/ProductPage.css";
import { useFavoriteStore } from "../store/favoritesStore";

type Props = {
    product: Product;
};

function ProductDetails({ product }: Props) {
    const { favorites, addToFavorite, removeFromFavorite } = useFavoriteStore();
    const isFavorite = favorites.some((item) => item.id === product.id);
    const navigate = useNavigate();

    return (
        <div className="product-container">
            <div className="product-img-box">
                <img
                    className="product-img"
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <div className="product-info-box">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
            </div>
            <div className="btn-action">
                <button className="btn-back" onClick={() => navigate("/")}>
                    Back to products
                </button>
                <button
                    className={`card-fav ${isFavorite ? "active" : ""}`}
                    aria-label="Favorite"
                    onClick={() =>
                        isFavorite
                            ? removeFromFavorite(product.id)
                            : addToFavorite(product)
                    }
                >
                    ♡ Add to Favorites
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
