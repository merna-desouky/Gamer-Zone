import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (isInCart(product.id)) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, counter: item.counter + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, counter: 1 }]);
        }
    };
    const resetCart = () => {
        setCart([]);
    };
    const decreaseCart = (prd) => {
        if (prd.counter === 1) {
            setCart(cart.filter((product) => product.id !== prd.id));
        } else {
            setCart(
                cart.map((item) =>
                    item.id === prd.id
                        ? { ...item, counter: item.counter - 1 }
                        : item
                )
            );
        }
    };

    const isInCart = (productId) => {
        return cart.some((product) => product.id === productId);
    };
    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, decreaseCart, removeFromCart, resetCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
