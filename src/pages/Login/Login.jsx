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
            <div className="login">
                <Link to="/">
                    <img
                        src="../../assets/images/logo1.png"
                        width="150px"
                        height="50px"
                        className="authLogo"
                    ></img>
                </Link>
                <h3 className="welcome">Welcome</h3>
                <LoginComponent />
                <div className="authentication-btn">
                    <GoogleLoginBtn />
                    <FacebookLoginBtn />
                </div>
            </div>
        </div>
    );
}

export default Login;
