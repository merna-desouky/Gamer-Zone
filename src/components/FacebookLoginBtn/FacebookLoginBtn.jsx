import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { setLogin } from '../../redux/store/LoginSlice/LoginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './FacebookLoginBtn.css';
function FacebookLoginBtn() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    return (
        <>
            <LoginSocialFacebook
                appId="1416158575697601"
                onResolve={(response) => {
                    localStorage.setItem(
                        'userToken',
                        response.data.signedRequest
                    );
                    dispatch(setLogin());
                    console.log('from face');
                    navigator('/');
                }}
                onReject={(error) => {
                    console.log(error, 'from error');
                }}
            >
                <FacebookLoginButton className="Facebook-login-button" />
            </LoginSocialFacebook>
        </>
    );
}

export default FacebookLoginBtn;
