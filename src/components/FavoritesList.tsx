import { useFavoriteStore } from "../store/favoritesStore";
import "../css/FavoritesPage.css"

function FavoritesList() {
    const { favorites, removeFromFavorite } = useFavoriteStore();

    return (
        <div>
            <div className="favorites-empty">
                {favorites.length === 0 && <div>No Favorite Product Yet</div>}
            </div>
            <div className="favorites-grid" >
                {favorites.map((product) => (
                    <div className="favorites-map" key={product.id} >
                        <img
                            className="fav-image"
                            src={product.image}
                            alt={product.title}
                        />
                        <h3 className="fav-title">{product.title}</h3>
                        <p className="fav-category">{product.category}</p>
                        <span className="fav-price">${product.price}</span>
                        <p className="fav-description">{product.description}</p>
                        <button
                            className="btn-remove-fav"
                            onClick={() => removeFromFavorite(product.id)}
                        >
                            {" "}
                            🗑️ Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoritesList;
