import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import './RegisterConponent.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
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
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        onChange={GetUserRegisterForm}
                        ref={inputRef}
                        variant="outlined"
                        name="name"
                        className="myInput"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '2px',
                                    },
                                },
                                '&:hover:not(.Mui-focused)': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                    },
                                },
                            },
                            '& .MuiInputLabel-outlined': {
                                color: ' rgb(165, 164, 164)',
                                '&.Mui-focused': {
                                    color: 'var(--color-var4)',
                                },
                            },
                        }}
                    />
                </div>

                <small className="error-message">
                    {errorList.length > 0 && IputValidator('name') ? (
                        <small>{errorList && IputValidator('name')}</small>
                    ) : (
                        ''
                    )}
                </small>
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        onChange={GetUserRegisterForm}
                        variant="outlined"
                        name="email"
                        className="myInput"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '2px',
                                    },
                                },
                                '&:hover:not(.Mui-focused)': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                    },
                                },
                            },
                            '& .MuiInputLabel-outlined': {
                                color: ' rgb(165, 164, 164)',
                                '&.Mui-focused': {
                                    color: 'var(--color-var4)',
                                },
                            },
                        }}
                    />
                </div>

                <small className="error-message">
                    {errorList.length > 0 && IputValidator('email') ? (
                        <small>{errorList && IputValidator('email')}</small>
                    ) : (
                        ''
                    )}
                </small>
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        onChange={GetUserRegisterForm}
                        variant="outlined"
                        name="password"
                        className="myInput"
                        type="password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '2px',
                                    },
                                },
                                '&:hover:not(.Mui-focused)': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                    },
                                },
                            },
                            '& .MuiInputLabel-outlined': {
                                color: ' rgb(165, 164, 164)',
                                '&.Mui-focused': {
                                    color: 'var(--color-var4)',
                                },
                            },
                        }}
                    />
                </div>
                <small className="error-message">
                    {errorList.length > 0 && IputValidator('password') ? (
                        <small>invalid Password</small>
                    ) : (
                        ''
                    )}
                </small>
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        onChange={GetUserRegisterForm}
                        variant="outlined"
                        name="rePassword"
                        className="myInput"
                        type="password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '2px',
                                    },
                                },
                                '&:hover:not(.Mui-focused)': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                    },
                                },
                            },
                            '& .MuiInputLabel-outlined': {
                                color: ' rgb(165, 164, 164)',
                                '&.Mui-focused': {
                                    color: 'var(--color-var4)',
                                },
                            },
                        }}
                    />
                </div>
                <small className="error-message">
                    {errorList.length > 0 && IputValidator('rePassword') ? (
                        <small>invalid Password</small>
                    ) : (
                        ''
                    )}
                </small>
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Phone"
                        onChange={GetUserRegisterForm}
                        variant="outlined"
                        name="phone"
                        className="myInput"
                        type="tel"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '1px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '2px',
                                    },
                                },
                                '&:hover:not(.Mui-focused)': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                    },
                                },
                            },
                            '& .MuiInputLabel-outlined': {
                                color: ' rgb(165, 164, 164)',
                                '&.Mui-focused': {
                                    color: 'var(--color-var4)',
                                },
                            },
                        }}
                    />
                </div>
                <small className="error-message">
                    {errorList.length > 0 && IputValidator('phone') ? (
                        <small>{errorList && IputValidator('phone')}</small>
                    ) : (
                        ''
                    )}
                </small>
                {registerError && (
                    <div className="error-message">{registerError}</div>
                )}
                <button className="register-btn">
                    {isLoading ? (
                        <i className="fa-solid fa-gamepad fa-beat"></i>
                    ) : (
                        'Sign Up'
                    )}
                </button>

                <div className="account mb-4 ">
                    Already have a account? <Link to="/login">Log In</Link>
                </div>
            </form>
        </>
    );
}

export default RegisterConponent;
