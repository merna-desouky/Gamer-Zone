import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import './RegisterConponent.css';
import { Link } from 'react-router-dom';
function RegisterConponent() {
    //State Mangment
    const [isLoading, setLoading] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const [RegisterForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    });
    const [registerError, setRegisterError] = useState('');
    const inputRef = useRef(null);
    const navigator = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    //programmatic Routing
    //Functions
    const GetUserRegisterForm = function (e) {
        const regData = { ...RegisterForm };
        regData[e.target.name] = e.target.value;
        setRegisterForm(regData);
    };

    const PostRegisterData = async function () {
        try {
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/auth/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(RegisterForm),
                }
            );

            const data = await response.json();
            if (data.message == 'success') {
                navigator('/login');
                setLoading(false);
            } else {
                data.message == 'fail'
                    ? setRegisterError(data.errors.msg)
                    : setRegisterError(data.message);
                setLoading(false);
            }
        } catch (error) {
            setRegisterError('Registration failed due to an error');
            setLoading(false);
        }
    };
    const validateRegisterForm = function () {
        const scheme = Joi.object({
            name: Joi.string().min(3).max(25).required(),
            email: Joi.string().email({
                tlds: { allow: ['com', 'net'] },
            }),
            password: Joi.string().pattern(/^\w{6,}$/),
            rePassword: Joi.string().pattern(/^\w{6,}$/),
            phone: Joi.string().pattern(/^01[0125][0-9]{8}$/),
        });
        return scheme.validate(RegisterForm, { abortEarly: false });
    };
    const handleSubmition = function (e) {
        e.preventDefault();
        setRegisterError('');
        setLoading(true);
        let validation = validateRegisterForm();
        if (validation.error) {
            setLoading(false);
            setErrorList(validation.error.details);
        } else {
            PostRegisterData();
        }
    };
    const IputValidator = function (inputName) {
        return errorList.filter((error) => {
            return error.context.label === inputName;
        })[0]?.message;
    };
    return (
        <>
            <form onSubmit={handleSubmition} className="register-form">
                <div>
                    <label className="register-label" htmlFor="name">
                        User Name
                    </label>
                    <input
                        className="register-input"
                        type="text"
                        id="name"
                        name="name"
                        onChange={GetUserRegisterForm}
                        ref={inputRef}
                        placeholder="Please Write Your Name"
                    />
                </div>

                <div className="error-message">
                    {errorList.length > 0 && IputValidator('name') ? (
                        <div>{errorList && IputValidator('name')}</div>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    <label className="register-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="register-input"
                        type="text"
                        id="email"
                        name="email"
                        onChange={GetUserRegisterForm}
                        placeholder="Please Write Your Email"
                    />
                </div>

                <div className="error-message">
                    {errorList.length > 0 && IputValidator('email') ? (
                        <div>{errorList && IputValidator('email')}</div>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    <label className="register-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="register-input"
                        type="password"
                        id="password"
                        name="password"
                        onChange={GetUserRegisterForm}
                        placeholder="Please Write Your Password"
                    />
                </div>
                <div className="error-message">
                    {errorList.length > 0 && IputValidator('password') ? (
                        <div>invalid Password</div>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    <label className="register-label" htmlFor="rePassword">
                        confirm Password
                    </label>
                    <input
                        className="register-input"
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        onChange={GetUserRegisterForm}
                        placeholder="Please Re-enter Your Password"
                    />
                </div>
                <div className="error-message">
                    {errorList.length > 0 && IputValidator('rePassword') ? (
                        <div>invalid Password</div>
                    ) : (
                        ''
                    )}
                </div>
                <div>
                    <label className="register-label" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="register-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={GetUserRegisterForm}
                        placeholder="Please enter Your Phone"
                    />
                </div>
                <div className="error-message">
                    {errorList.length > 0 && IputValidator('phone') ? (
                        <div>{errorList && IputValidator('phone')}</div>
                    ) : (
                        ''
                    )}
                </div>
                {registerError && (
                    <div className="error-message">{registerError}</div>
                )}
                <button className="register-btn">
                    {isLoading ? (
                        <i className="fa-solid fa-gamepad fa-beat"></i>
                    ) : (
                        'Create Account'
                    )}
                </button>

                <div className="account">
                    Already have a account? <Link to="/login">Log In</Link>
                </div>
            </form>
        </>
    );
}

export default RegisterConponent;
