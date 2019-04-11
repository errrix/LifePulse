import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <div>

                <div className="subscribe-block">
                    <div className="container">
                        <img src="../../../dist/img/subscrible-img.jpg" alt=""/>
                        <div className="subscribe-block-wrapper">
                            <h2 className="h2Header">
                                Следите за новостями LIFES<span>PULSE</span>
                            </h2>
                            <form action="">
                                <label>
                                    <input type="email" required placeholder="Введите Ваш e-mail"/>
                                </label>
                                <button type="submit" className="btn">
                                    Подписаться
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="main-footer">
                    <div className="main-footer-wrapper">
                        <div>
                            <div className="contact-link">

                                <a href="mailto:support@info.com">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         x="0px" y="0px"
                                         viewBox="0 0 512 512" >
                                        <g>
                                            <path d="M451.2,61.6H60.8C27.3,61.6,0,87.7,0,119.9v272.2c0,32.2,27.3,58.4,60.8,58.4h390.5
		c33.5,0,60.8-26.2,60.8-58.4V119.9C512,87.7,484.7,61.6,451.2,61.6z M451.2,398.9H60.8c-4.9,0-9.2-3.2-9.2-6.8V155.9L228.1,305
		c3.6,3.1,8.2,4.7,13,4.7l29.8,0c4.7,0,9.3-1.7,13-4.7l176.6-149.1v236.2C460.5,395.7,456.2,398.9,451.2,398.9z M256,258.6
		L84.2,113.1h343.5L256,258.6z"/>
                                        </g>
                                    </svg>
                                    <span>support@info.com</span>
                                </a>

                                <a href="/">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         x="0px" y="0px"
                                         viewBox="0 0 512 512"  >
                                        <g>
                                            <path d="M256,0C153.8,0,70.6,83.2,70.6,185.4c0,126.9,165.9,313.2,173,321c6.6,7.4,18.2,7.4,24.8,0
				c7.1-7.9,173-194.1,173-321C441.4,83.2,358.2,0,256,0z M256,278.7c-51.4,0-93.3-41.9-93.3-93.3s41.9-93.3,93.3-93.3
				s93.3,41.9,93.3,93.3S307.4,278.7,256,278.7z"/>
                                        </g>
                                    </svg>
                                    <span>
                    Одесса, Украина
                </span>
                                </a>
                            </div>

                            <div className="nav-block">
                                <div>
                                    <Link to='/about'>О нас</Link>
                                    <Link to='/faq'>F.A.Q.</Link>
                                    <Link to='/confidentiality'>Конфиденциальность</Link>
                                    <Link to='/rules'>Правила сайта</Link>
                                </div>

                                <div>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                    <Link to='/create-fundraiser'>Подать заявку</Link>
                                    <Link to='/'>Успешные сборы</Link>
                                    <Link to='/blog'>Блог</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-footer-wrapper">
                        <h6>© LIFESPULSE. Все права сохранены</h6>
                    </div>
                </footer>
            </div>

        )
    }
};

export default Footer;