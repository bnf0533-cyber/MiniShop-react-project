import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useContext";

function Layout() {
    const {theme} =useTheme()
    return (
        <div className={`layout ${theme}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
