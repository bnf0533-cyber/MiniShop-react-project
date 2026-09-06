import { create } from "zustand";
import type { Product } from "../types/types";
import { persist } from "zustand/middleware";
interface FavoriteStore {
    favorites: Product[];
    addToFavorite: (products: Product) => void;
    removeFromFavorite: (id: number) => void;
}
export const useFavoriteStore = create<FavoriteStore>()(
    persist(
        (set) => ({
            favorites: [],
            addToFavorite: (product) =>
                set((state) => ({
                    favorites: [...state.favorites, product],
                })),
            removeFromFavorite: (id) => {
                set((state) => ({
                    favorites: state.favorites.filter((p) => p.id !== id),
                }));
            },
        }),
        { name: "my-favorites" }
    )
);
