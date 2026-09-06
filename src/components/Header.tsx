import { Link } from "react-router";
import { useFavoriteStore } from "../store/favoritesStore";
import "../css/Header.css";
function Header() {
    const { favorites } = useFavoriteStore();
    return (
        <header>
            <nav className="header">
                <div className="header-headline">
                    <Link to="/">Mini Shop</Link>
                </div>
                <div className="header-links">
                    <Link to="/" className="header-link">
                        Products
                    </Link>
                    <Link to="/favorites" className="header-link">
                        Favorites
                        <span className="badge">{favorites.length}</span>
                    </Link>
                </div>
                <div className="dark-mode">
                    <button className="btn-dark-mode">
                        {/* { && "light"} */}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
