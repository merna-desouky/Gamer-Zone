import { Link, NavLink, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '/images/logo1.png';
import navbarStyle from '../Navbar/Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/store/LoginSlice/LoginSlice';
import { Badge, Button, Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const location = useLocation();
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();
    const { cart } = useCart();
    const [badge, setBadge] = useState(0);

    useEffect(() => {
        const totalItemsInCart = cart.reduce(
            (total, item) => total + item.counter,
            0
        );
        setBadge(totalItemsInCart);
    }, [cart]);

    const handleContactClick = () => {
        if (location.pathname === '/') {
            scroll.scrollToBottom();
        } else {
            // Navigate to home page
            window.location.href = '/';
            scroll.scrollToBottom();
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg ${navbarStyle.shift}`}
                data-bs-theme="dark"
                style={{ backgroundColor: 'var(--color-var1)' }}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt=""
                            style={{ width: '75px', height: '50px' }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler z-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul
                            className={`${navbarStyle.smallMedia} navbar-nav me-auto mb-2 mb-lg-0`}
                            style={{ marginLeft: '35%' }}
                        >
                            <li className="nav-item">
                                <NavLink
                                    className={`${navbarStyle.navText} nav-link `}
                                    exact
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName={navbarStyle.activeLink}
                                    className={`${navbarStyle.navText} nav-link `}
                                    to="/products"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`${navbarStyle.navText} nav-link text-light`}
                                    onClick={handleContactClick}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Contacts
                                </button>
                            </li>
                        </ul>

                        <div className={navbarStyle.rightSide}>
                            {' '}
                            <Link to={'/cart'}>
                                {' '}
                                <Badge
                                    badgeContent={badge ? badge : '0'}
                                    className={navbarStyle.cart}
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            backgroundColor:
                                                'var(--color-var4)',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <ShoppingCartOutlinedIcon
                                        sx={{
                                            color: '#fff',
                                            width: '30px',
                                            height: '30px',
                                        }}
                                    />
                                </Badge>
                            </Link>
                            {isLogged ? (
                                <>
                                    <div className={navbarStyle.avatar}>
                                        <Button
                                            id="basic-button"
                                            aria-controls={
                                                open ? 'basic-menu' : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                open ? 'true' : undefined
                                            }
                                            onClick={handleClick}
                                        >
                                            <img
                                                src="/images/profile.png"
                                                width="40px"
                                                height="40px"
                                            ></img>
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby':
                                                    'basic-button',
                                            }}
                                        >
                                            <Link
                                                to={'/profile'}
                                                onClick={handleClose}
                                                className={navbarStyle.myLink}
                                            >
                                                <MenuItem>Profile</MenuItem>
                                            </Link>

                                            <MenuItem onClick={handleClose}>
                                                <div
                                                    onClick={() =>
                                                        dispatch(logOut())
                                                    }
                                                >
                                                    SignOut
                                                </div>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <div
                                            className={`${navbarStyle.signButton}`}
                                        >
                                            <button className="btn btn-danger me-2">
                                                Login
                                            </button>
                                        </div>
                                    </Link>
                                    <Link to="/register">
                                        <div
                                            className={`${navbarStyle.signButton} ms-3`}
                                        >
                                            <button className="btn btn-danger me-2">
                                                Register
                                            </button>
                                        </div>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
