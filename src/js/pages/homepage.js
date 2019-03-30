import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron'
import Howitwork from '../components/howitwork'
import Marketing from '../components/marketing'
import BlogHomepage from '../components/blogHomepage'
import СardBlock from '../components/cardBlock'


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="popup hide-popup">
                    <div className="popup-content-block">
                        <div className="popup-content-block-wrapper">

                            <div className="popup-step m--login">

                                <form className="main-form" action="">
                                    <label className="label-input">
                                        <span>Ваша почта:</span>
                                        <input type="email" required/>
                                        <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                    </label>
                                    <div className="label-password-top-block">
                                        <span>Пароль:</span>
                                        <button className="forgot-password" type="button">
                                            Забыли пароль?
                                        </button>
                                    </div>
                                    <label className="label-input">
                                        <input type="password" required/>
                                        <span className="error">Неверный пароль. Введите еще раз</span>
                                    </label>
                                    <label className="label-checkbox">

                                        <input type="checkbox"/>
                                        <span>
                             Запомнить меня
                        </span>
                                    </label>

                                    <div className="button-wrapper">
                                        <button type="submit" className="btn m--with-loader">
                                <span>
                                     войти
                                </span>
                                            <span className="loader"></span>
                                        </button>
                                    </div>

                                </form>
                                <a href="/" className="no-account">
                                    Нет аккаунта?
                                </a>
                            </div>
                            <div className="popup-step m--restore-password hide-step">
                                <button type="button" className="button-back">
                                    назад
                                </button>

                                <h6>
                                    Введите email, который Вы указывали при регистрации:
                                </h6>

                                <form className="main-form" action="">
                                    <label className="label-input">
                                        <input type="text"/>
                                        <span className="error">Некорректный email. Попробуйте еще раз</span>
                                    </label>
                                    <div className="button-wrapper">
                                        <button className="btn m--with-loader" type="submit">

                                            <span>отправить</span>

                                            <span className="loader"></span>

                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="popup-step m--thanks hide-step"></div>
                        </div>
                    </div>
                </div>
                <Header></Header>

                <Jumbotron></Jumbotron>

                <СardBlock title={'Популярные компании'}></СardBlock>



                <Howitwork></Howitwork>

                <СardBlock title={'Помогать легко'}></СardBlock>

                <Marketing></Marketing>

                <BlogHomepage></BlogHomepage>

                <Footer></Footer>
            </div>

        )
    }
};

export default Homepage;
