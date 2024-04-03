import FooterStyle from '../Footer/Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '/images/logo1.png';
import { useRef } from 'react';
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
                                            color: 'var(--color-var4)',
                                            fontSize: '20px',
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
                                                fontSize: '0.8rem',
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
                                                fontSize: '0.8rem',
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
                                                resize: 'none',
                                                fontSize: '0.8rem',
                                            }}
                                        ></textarea>
                                        <div className="cheack d-flex align-items-center">
                                            <input id="terms" type="checkbox" />{' '}
                                            <label
                                                htmlFor="terms"
                                                style={{
                                                    fontSize: '8px',
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
                                            style={{
                                                fontSize: '12px',
                                                marginTop: '5rem',
                                            }}
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
                                    style={{ padding: '0 20px' }}
                                >
                                    <div
                                        className={FooterStyle.headTitle}
                                        style={{
                                            width: '90%',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            margin: '0 auto 20px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        WE ARE READY TO GIVE YOU THE BEST{' '}
                                        <span>Entertainment</span>.
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            margin: 'auto',
                                        }}
                                    >
                                        <div
                                            className={`address d-flex justify-content-between mt-5 ${FooterStyle.addressSmall}`}
                                            style={{ marginBottom: '50px' }}
                                        >
                                            <div
                                                className={`d-flex gap-2 align-items-center ${FooterStyle.smallAdd}`}
                                                style={{
                                                    marginInlineEnd: '30px',
                                                }}
                                            >
                                                <i
                                                    className="fa-solid fa-location-dot"
                                                    style={{
                                                        color: 'var(--color-var4)',
                                                        marginRight: '10px',
                                                        fontSize: '25px',
                                                    }}
                                                ></i>
                                                <p
                                                    style={{
                                                        fontSize: '9px',
                                                        margin: '0',
                                                    }}
                                                >
                                                    Masr ElGdeda, Street
                                                    Sheraton Elmatar, 35222
                                                </p>
                                            </div>
                                            <div
                                                className={`d-flex gap-2 align-items-center ${FooterStyle.smallAdd}`}
                                            >
                                                <i
                                                    className="fa-solid fa-phone"
                                                    style={{
                                                        color: 'var(--color-var4)',
                                                        marginRight: '10px',
                                                        fontSize: '25px',
                                                    }}
                                                ></i>
                                                <p
                                                    style={{
                                                        fontSize: '9px',
                                                        margin: '0',
                                                    }}
                                                >
                                                    Call us: +01063403215
                                                </p>
                                            </div>
                                        </div>

                                        {/* <div
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
                                                style={{ width: '120px' }}
                                                src={logo}
                                                alt=""
                                            />
                                        </div> */}
                                        <div className="d-flex justify-content-center gap-4">
                                            <div className="">
                                                <Link
                                                    to={
                                                        'https://www.instagram.com/'
                                                    }
                                                    target="_blank"
                                                    style={{
                                                        textDecorationColor:
                                                            'var(--color-var4)',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                        fontSize: '0.7rem',
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
                                                            'var(--color-var4)',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                        fontSize: '0.7rem',
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
                                                            'var(--color-var4)',
                                                        textDecorationThickness:
                                                            '0.2em',
                                                        color: 'white',
                                                        fontSize: '0.7rem',
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
