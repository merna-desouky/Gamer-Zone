import { IconButton } from '@mui/material';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Link, useNavigate } from 'react-router-dom';
import Paypal from '../../components/Payment/Paypal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Cart() {
    const { cart, addToCart, decreaseCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((acc, el) => acc + el.price * el.counter, 0);
    const totalItems = cart.reduce((acc, el) => acc + el.counter, 0);
    const [display, setDisplay] = useState(false);

    const isLogged = useSelector((state) => state.isLogged);

    // useEffect(() => {
    //     isLogged ? setDisplay(true) : setDisplay(false);
    // }, [isLogged]);

    const handleIncrease = (el) => {
        addToCart(el);
    };
    const handleDecrease = (el) => {
        decreaseCart(el);
    };
    const handleDelete = (id) => {
        removeFromCart(id);
    };
    const handleClick = () => {
        isLogged ? setDisplay(true) : setDisplay(false);
        if (!isLogged) {
            navigate('/login');
        }
    };
    return (
        <div className="cartPage">
            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-lg-9  order-md-0  order-1">
                        <div className="items">
                            {cart.length === 0 ? (
                                <div className="empty">
                                    <div> Your cart is empty :(</div>
                                    <Link to={'/products'}>
                                        <button>Go to Shopping</button>
                                    </Link>
                                </div>
                            ) : (
                                cart.map((el) => (
                                    <div className="row mb-5" key={el.id}>
                                        <div className="col-sm-8 col-xs-12   ">
                                            <div className="item-content ">
                                                <div className="img">
                                                    <img
                                                        src={`/images/${el.poster}`}
                                                    ></img>
                                                </div>
                                                <div className="content-cart">
                                                    <div className="name">
                                                        {el.name}
                                                    </div>
                                                    <div className="catg">
                                                        {el.category}
                                                    </div>
                                                    <div className="price">
                                                        {el.price} EGP
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-2 ">
                                            <div className="counter">
                                                <IconButton
                                                    onClick={() => {
                                                        handleIncrease(el);
                                                    }}
                                                >
                                                    <AddBoxIcon
                                                        style={{
                                                            color: 'white',
                                                        }}
                                                    ></AddBoxIcon>
                                                </IconButton>
                                                <span>{el.counter}</span>

                                                <IconButton
                                                    onClick={() => {
                                                        handleDecrease(el);
                                                    }}
                                                >
                                                    <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-2">
                                            <div className="delete-btn">
                                                <span
                                                    className="trash"
                                                    onClick={() => {
                                                        handleDelete(el.id);
                                                    }}
                                                >
                                                    <span></span>
                                                    <i></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="proceedToCheck">
                            <div className="mb-2">
                                Subtotal ({totalItems} item):
                            </div>{' '}
                            <div className="mb-3">{totalPrice} EGP</div>
                            <button
                                className="proceed-btn"
                                onClick={handleClick}
                            >
                                Proceed to checkout
                            </button>
                        </div>
                        {display ? <Paypal price={totalPrice}></Paypal> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
}
