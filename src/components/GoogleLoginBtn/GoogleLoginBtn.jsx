import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { setLogin } from '../../redux/store/LoginSlice/LoginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './GoogleLogin.css';
function GoogleLoginBtn() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const responseMessage = (response) => {
        localStorage.setItem('userToken', response.credential);
        dispatch(setLogin());
        navigator('/');
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <GoogleOAuthProvider clientId="278869568085-hc1gppiprrjvdm6k47tum2i9omj78928.apps.googleusercontent.com">
                <GoogleLogin
                    className="google-login-btn"
                    onSuccess={responseMessage}
                    onError={errorMessage}
                />
            </GoogleOAuthProvider>
        </div>
    );
}

export default GoogleLoginBtn;
