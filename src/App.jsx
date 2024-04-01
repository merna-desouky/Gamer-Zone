import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { FavoritesProvider } from './context/FavoritesContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { CartProvider } from './context/CartContext';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/Layout/Layout';
import Payed from './pages/Checkout/Checkout';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            dispatch(setLogin());
        }
    }, []);
    return (
        <>
            <CartProvider>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route
                                path="/payed"
                                element={
                                    <ProtectedRoute>
                                        <Payed />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductDetails />}
                            />

                            <Route path="/cart" element={<Cart />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        <Route path="/*" element={<Error />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </FavoritesProvider>
            </CartProvider>
        </>
    );
}

export default App;
