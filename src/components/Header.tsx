import { NavLink } from "react-router";
import { useFavoriteStore } from "../store/favoritesStore";
import "../css/Header.css";
import ThemeToggle from "./ThemeToggle";
function Header() {
    const { favorites } = useFavoriteStore();
    return (
        <header>
            <nav className="header">
                <div className="header-headline">
                    <NavLink to="/">Mini Shop</NavLink>
                </div>
                <div className="header-links">
                    <NavLink to="/" end className="header-link">
                        Products
                    </NavLink>
                    <NavLink to="/favorites" className="header-link">
                        Favorites
                        <span className="badge">{favorites.length}</span>
                    </NavLink>
                </div>
                <div className="dark-mode">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;
