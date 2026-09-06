import FavoritesList from "../components/FavoritesList";
import "../css/FavoritesPage.css";

function FavoritesPage() {
    return (
        <div className="favorites-page-container">
            <h1>Favorites</h1>
            <FavoritesList />
        </div>
    );
}

export default FavoritesPage;
