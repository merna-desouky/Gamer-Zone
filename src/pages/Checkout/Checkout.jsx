import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Products from '../../pages/Products/Products';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { useCart } from './../../context/CartContext';
export default function Payed() {
    const navigate = useNavigate();
    const { resetCart } = useCart();
    return (
        <div className="paymentSuccess">
            <div className="text-center" style={{ marginTop: '150px' }}>
                <h1>Transaction Completed</h1>
                <div>
                    <CheckCircleIcon
                        style={{ fill: 'green', width: '50px', height: '50px' }}
                    ></CheckCircleIcon>
                </div>
                <button
                    onClick={() => {
                        navigate('/');
                        resetCart();
                    }}
                    className="mt-3"
                >
                    Home
                </button>
            </div>
            {/* <div
                className="mx-auto mt-3 mb-3"
                style={{
                    width: '90%',
                    height: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                }}
            ></div> */}

            {/* <Products></Products> */}
        </div>
    );
}
