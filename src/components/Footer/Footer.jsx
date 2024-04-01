import FooterStyle from '../Footer/Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_6i9dfk7',
                'template_fgajqk8',
                form.current,
                '692mJ7z8uyaWM4n1o'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <div className="super-parent position-relative">
                <div className={FooterStyle.parent}>
                    <div
                        className={`container-fluid`}
                        style={{ maxWidth: 'none' }}
                    >
                        <div className="row">
                            <div
                                className={`col-md-4 fw-bold text-white z-3 ${FooterStyle.leftSide}`}
                            >
                                <form action="" className={`mt-5`} ref={form}>
                                    <div
                                        className="header text-center"
                                        style={{
                                            color: '#ff4136',
                                            fontSize: '30px',
                                        }}
                                    >
                                        Get in touch
                                    </div>
                                    <div className="d-flex flex-column form-box col-lg-10 mx-3 mt-3 p-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            style={{
                                                caretColor: '#eee',
                                                color: '#eee',
                                                padding: '10px',
                                                marginBottom: '15px',
                                                background: 'none',
                                                outline: 'none',
                                                borderBottom: '1px solid #eee',
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            }}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            style={{
                                                caretColor: '#eee',
                                                color: '#eee',
                                                padding: '10px',
                                                marginBottom: '15px',
                                                background: 'none',
                                                outline: 'none',
                                                borderBottom: '1px solid #eee',
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            }}
                                        />
                                        <textarea
                                            name="message"
                                            placeholder="Content"
                                            style={{
                                                caretColor: '#eee',
                                                color: '#eee',
                                                padding: '10px',
                                                height: '100px',
                                                marginBottom: '15px',
                                                background: 'none',
                                                outline: 'none',
                                                borderBottom: '1px solid #eee',
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            }}
                                        ></textarea>
                                        <div className="cheack d-flex">
                                            <input id="terms" type="checkbox" />{' '}
                                            <label
                                                htmlFor="terms"
                                                style={{
                                                    fontSize: '12px',
                                                    fontWeight: 'normal',
                                                    color: '#ccc',
                                                    marginLeft: '5px',
                                                }}
                                            >
                                                I would like to receive the
                                                newsletter.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className={`${FooterStyle.submitButton} px-3 py-2`}
                                            onClick={sendEmail}
                                        >
                                            <span>Submit</span>
                                            <i className="fa-solid fa-arrow-right-long text-white"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-8 fw-bold text-white z-3 d-flex justify-content-center align-items-center">
                                <div
                                    className="main-content"
                                    style={{ width: '75%' }}
                                >
                                    <div
                                        className={FooterStyle.headTitle}
                                        style={{
                                            width: '50%',
                                            fontSize: '35px',
                                            fontWeight: 'bold',
                                            margin: '0 auto 20px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        WE ARE READY TO GIVE YOU THE BEST{' '}
                                        <span style={{ color: '#ff4136' }}>
                                            Entertainment
                                        </span>
                                        .
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            margin: 'auto',
                                        }}
                                    >
                                        <div
                                            className={`address d-flex justify-content-between mt-5 ${FooterStyle.addressSmall}`}
                                        >
                                            <div
                                                className={`d-flex ${FooterStyle.smallAdd}`}
                                            >
                                                <i
                                                    className="fa-solid fa-location-dot"
                                                    style={{
                                                        color: '#ff4136',
                                                        marginRight: '10px',
                                                        fontSize: '25px',
                                                    }}
                                                ></i>
                                                <p className="">
                                                    Masr ElGdeda, Street
                                                    Sheraton Elmatar , 35222
                                                </p>
                                            </div>
                                            <div
                                                className={`d-flex ${FooterStyle.smallAdd}`}
                                            >
                                                <i
                                                    className="fa-solid fa-phone"
                                                    style={{
                                                        color: '#ff4136',
                                                        marginRight: '10px',
                                                        fontSize: '25px',
                                                    }}
                                                ></i>
                                                <p className="">
                                                    Call us: +01063403215
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="d-flex justify-content-center"
                                            style={{
                                                width: '50%',
                                                margin: 'auto',
                                                marginTop: '30px',
                                                marginBottom: '50px',
                                            }}
                                        >
                                            <img
                                                className=""
                                                style={{ width: '180px' }}
                                                src={logo}
                                                alt=""
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center gap-4">
                                            <div className="">
                                                <Link
                                                    to={
                                                        'https://www.instagram.com/'
                                                    }
                                                    target="_blank"
                                                    style={{
                                                        textDecorationColor:
                                                            '#ff4136',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                    }}
                                                >
                                                    instagram
                                                </Link>
                                            </div>
                                            <div className="">
                                                <Link
                                                    to={
                                                        'https://www.facebook.com/'
                                                    }
                                                    target="_blank"
                                                    style={{
                                                        textDecorationColor:
                                                            '#ff4136',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                    }}
                                                >
                                                    facebook
                                                </Link>
                                            </div>
                                            <div className="">
                                                <Link
                                                    to={'https://twitter.com/'}
                                                    target="_blank"
                                                    style={{
                                                        textDecorationColor:
                                                            '#ff4136',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                    }}
                                                >
                                                    twitter
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
