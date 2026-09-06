import { useEffect, useRef } from "react";

type SearchType = {
    search: string;
    setSearch: (val: string) => void;
};

function SearchBar({ search, setSearch }: SearchType) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <div className="search-box">
            <input
                className="search-input"
                type="search"
                value={search}
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search products..."
            />
        </div>
    );
}

export default SearchBar;
