import LoginComponent from '../../components/Login/LoginComponent';
import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn';
import FacebookLoginBtn from '../../components/FacebookLoginBtn/FacebookLoginBtn';
import { Link } from 'react-router-dom';
import './Login.css';
function Login() {
    return (
        <div className="login-holder">
            <div className="login-image">
                <img src="/images/Rectangle 3.png" alt="game-image" />
                <img src="/images/Overlay.png" alt="overlay" />
            </div>
            <div className="leftSide">
                {' '}
                <div className="authLogo">
                    <Link to="/">
                        <img src="/images/logo1.png" height="70px"></img>
                    </Link>
                </div>
                <div className="login">
                    <h3 className="welcome">Welcome back!</h3>
                    <LoginComponent />
                    <div className="authentication-btn">
                        <GoogleLoginBtn />
                        <FacebookLoginBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
