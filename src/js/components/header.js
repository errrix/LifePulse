import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
                <header className="main-header">
                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <Link to='/'>
                                <img src="../../../dist/img/img-logo.png" alt=""/>
                            </Link>
                        </div>

                        <div className="navigation-side">
                            <ul className="navigation">
                                <li className="hover-submenu">
                                    <Link to='/faq'>F.A.Q.</Link>
                                </li>
                                <li>
                                    <a href="/">Успешные сборы</a>

                                </li>
                                <li>
                                    <a href="/">Блог</a>

                                </li>
                                <li>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                </li>
                                <li>
                                    <a href="/"> Подать заявку</a>

                                </li>
                            </ul>

                            <div className="button-block">
                                <button className="header-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M495.6 466.4L373.8 339.6c31.3-37.2 48.5-84.1 48.5-132.9C422.3 92.7 329.5 0 215.6 0S8.8 92.7 8.8 206.7s92.7 206.7 206.7 206.7c42.8 0 83.6-12.9 118.4-37.4l122.8 127.7c5.1 5.3 12 8.3 19.4 8.3 7 0 13.6-2.7 18.7-7.5 10.8-10.3 11.2-27.4.8-38.1zm-280-412.5c84.3 0 152.8 68.5 152.8 152.8s-68.5 152.8-152.8 152.8S62.8 291 62.8 206.7 131.3 53.9 215.6 53.9z"
                                            fill="#e5e5e5"/>
                                    </svg>
                                </button>

                                <button className="header-login-popup">
                                    Вход | Регистрация
                                </button>
                            </div>
                        </div>
                    </div>


                </header>
        )
    }
};

export default Header;