import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gamesAction } from '../../redux/store/getAllData';
import { useCart } from '../../context/CartContext';
export default function Paypal({ price }) {
    const [payed, setPayed] = useState(false);
    const paypal = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useCart();
    useEffect(() => {
        dispatch(gamesAction());
    }, [dispatch]);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, action) => {
                    return action.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order ID: ' + order.id);
                    setPayed(true);
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);
    useEffect(() => {
        console.log(payed);
    }, [payed]);
    if (!payed) return <div className="mt-5" ref={paypal}></div>;
    else if (payed) {
        return <>{navigate('/payed')}</>;
    }
}
