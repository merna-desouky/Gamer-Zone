import FacebookLoginBtn from '../../components/FacebookLoginBtn/FacebookLoginBtn';
import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn';
import RegisterComponent from '../../components/Register/RegisterConponent';
import { Link } from 'react-router-dom';
import './Register.css';
export default function Register() {
    return (
        <div className="register-holder">
            <div className="register-image">
                <img src="/images/Rectangle 3.png" alt="game-image" />
                <img src="/images/Overlay.png" alt="overlay" />
            </div>
            <div className="leftSide">
                {' '}
                <div className="authLogo">
                    {' '}
                    <Link to="/">
                        <img src="/images/logo1.png" height="60px"></img>
                    </Link>
                </div>
                <div className="register">
                    <h3 className="welcome">Create Account</h3>
                    <RegisterComponent />
                    <div className="authentication-btn">
                        <GoogleLoginBtn />
                        <FacebookLoginBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}
