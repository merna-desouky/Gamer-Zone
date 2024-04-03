/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';
import { useSelector } from 'react-redux';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const isLogged = useSelector((state) => state.isLogged);
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const addToFavorites = (product) => {
        if (isLogged) {
            setFavorites([...favorites, product]);
        }
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
