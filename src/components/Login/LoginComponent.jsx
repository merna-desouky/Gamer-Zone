import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/store/LoginSlice/LoginSlice';
import './LoginComponent.css';
import { TextField } from '@mui/material';
function LoginComponent() {
    //Redux
    const dispatch = useDispatch();
    //State Mangment Using State
    const [isLoading, setLoading] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const [LoginForm, setLoginForm] = useState({ email: '', password: '' });
    const [LoginError, setLoginError] = useState('');
    //Use Ref
    const inputRef = useRef(null);
    //Use Effcet
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    //programmatic Routing
    const navigator = useNavigate();
    //Functions
    //Get Form Data
    const GetUserLoginForm = function (e) {
        const regData = { ...LoginForm };
        regData[e.target.name] = e.target.value;
        setLoginForm(regData);
    };
    //Post Data
    const PostLoginData = async function () {
        try {
            const response = await fetch(
                'https://ecommerce.routemisr.com/api/v1/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(LoginForm),
                }
            );
            const data = await response.json();
            if (data.message == 'success') {
                setLoading(false);
                localStorage.setItem('userToken', data.token);
                dispatch(setLogin());
                navigator('/');
            } else {
                data.message == 'fail'
                    ? setLoginError(data.errors.msg)
                    : setLoginError(data.message);
                setLoading(false);
            }
        } catch (error) {
            setLoginError('Registration failed due to an error');
            setLoading(false);
        }
    };
    //Validation Form
    const validateLoginForm = function () {
        const scheme = Joi.object({
            email: Joi.string().email({
                tlds: { allow: ['com', 'net'] },
            }),
            password: Joi.string().pattern(/^\w{6,}$/),
        });
        return scheme.validate(LoginForm, { abortEarly: false });
    };
    //Handle Submit
    const handleSubmition = function (e) {
        e.preventDefault();
        setLoginError('');
        setLoading(true);
        let validation = validateLoginForm();
        if (validation.error) {
            setLoading(false);
            setErrorList(validation.error.details);
        } else {
            PostLoginData();
        }
    };
    //Handle Validator
    const IputValidator = function (inputName) {
        return errorList.filter((error) => {
            return error.context.label === inputName;
        })[0]?.message;
    };
    return (
        <>
            <form onSubmit={handleSubmition} className="login-form">
                <div className="inputContainer">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        onChange={GetUserLoginForm}
                        ref={inputRef}
                        variant="outlined"
                        name="email"
                        className="myInput"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '2px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '3px',
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
                        className="myInput"
                        id="outlined-basic"
                        label="Password"
                        onChange={GetUserLoginForm}
                        ref={inputRef}
                        variant="outlined"
                        type="password"
                        name="password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: 'rgb(165, 164, 164)',

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--color-var4)',
                                    borderWidth: '2px',
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'var(--color-var4)',
                                        borderWidth: '3px',
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
                        <small>invalid Email or Password</small>
                    ) : (
                        ''
                    )}
                </small>
                <button className="login-btn">
                    {isLoading ? (
                        <i className="fa-solid fa-gamepad fa-beat"></i>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
            <div>{LoginError}</div>
        </>
    );
}

export default LoginComponent;
