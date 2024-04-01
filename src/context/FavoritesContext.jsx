/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const addToFavorites = (product) => {
        setFavorites([...favorites, product]);
    };

    const removeFromFavorites = (productId) => {
        setFavorites(favorites.filter((product) => product.id !== productId));
    };

    const isFavorite = (productId) => {
        return favorites.some((product) => product.id === productId);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, toggleFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
