import './SingleProduct.css';
import { IconButton, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useFavorites } from '../../context/FavoritesContext';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function SingleProduct({ item, fav }) {
    const { toggleFavorite } = useFavorites();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const isLogged = useSelector((state) => state.isLogged);
    //fav toggle
    const handleToggle = () => {
        toggleFavorite(item);
    };
    const handleAddToCart = (item) => {
        addToCart(item);
    };
    const handleFav = () => {
        if (!isLogged) {
            navigate('/login');
        }
    };
    return (
        <div className="singleProductGames">
            {item && (
                <div className="myCard">
                    <div
                        className="img"
                        style={{
                            background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(/images/${item.image})`,
                            // backgroundSize: 'cover',
                            // backgroundPosition: 'center',
                            // backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="container-fluid">
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="catg">
                                    <div>Microsoft Studios </div>
                                    <div className="rect"></div>
                                    <div>{item.category}</div>
                                    <div className="rect"></div>
                                    <div className="rating">
                                        <Rating
                                            name="half-rating"
                                            defaultValue={item.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="desc">{item.description}</div>
                                <div className="buttons">
                                    <Link to="/cart">
                                        <button
                                            className="product-btn"
                                            onClick={() => {
                                                handleAddToCart(item);
                                            }}
                                        >
                                            <span>BUY</span>
                                            <span>{item.price} EGP</span>
                                        </button>
                                    </Link>

                                    {!isLogged ? (
                                        <IconButton
                                            className="product-btn "
                                            onClick={handleFav}
                                        >
                                            <FavoriteBorderIcon
                                                sx={{
                                                    fontSize: '25px',
                                                    // color: 'var(--color-var4)',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </IconButton>
                                    ) : fav ? (
                                        <IconButton
                                            className="product-btn "
                                            onClick={handleToggle}
                                        >
                                            <FavoriteOutlinedIcon
                                                sx={{
                                                    fontSize: '25px',
                                                    color: 'var(--color-var4)',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            className="product-btn "
                                            onClick={handleToggle}
                                        >
                                            <FavoriteBorderIcon
                                                sx={{
                                                    fontSize: '25px',
                                                    // color: 'var(--color-var4)',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </IconButton>
                                    )}

                                    <button className="product-btn ">
                                        <CardGiftcardIcon></CardGiftcardIcon>
                                    </button>
                                    <button
                                        className="product-btn "
                                        onClick={() => {
                                            handleAddToCart(item);
                                        }}
                                    >
                                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
