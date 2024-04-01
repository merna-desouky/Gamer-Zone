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
            <div className="register">
                <Link to="/">
                    <img
                        src="/assets/images/logo1.png"
                        width="150px"
                        height="50px"
                        className="authLogo"
                    ></img>
                </Link>
                <h3 className="welcome">Welcome</h3>
                <RegisterComponent />
                <div className="or">-OR-</div>
                <div className="authentication-btn">
                    <GoogleLoginBtn />
                    <FacebookLoginBtn />
                </div>
                <div className="copy-right">
                    &copy;copyrights reserved to EMJJM
                </div>
            </div>
        </div>
    );
}
