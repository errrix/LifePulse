import React from "react";
import {Link} from "react-router-dom";

class about extends React.Component {
    componentDidMount(){
        document.title = "LifesPulse | О Нас"
    }

    render() {
        return (
            <div>
                <div className="about-block">
                    <div className="container">
                        <h1 className="h2Header">О Нас</h1>

                        <blockquote>«Каждый из нас ангел, но только с одним крылом. И мы можем летать только обнявшись друг с другом». <span>Лучано Де Крезенцо.</span></blockquote>
                         <p>
                             <span className="lp-style-text">LifesPulse</span> - это краудфандинговая (фандрайзинговая) платформа, предлагающая новаторский метод по сбору денежных средств на лечение через интернет.
                             Его суть заключается в безвозмездных пожертвованиях добровольного характера.
                         </p>

                        <p>
                            Мечта создать онлайн-ресурс полезный для людей возникла не случайно. Серьезным поводом для ее воплощения в Украине стали две причины: малоэффективная
                            медицинская реформа и низкий уровень жизни в нашей стране. Они не оставляют людям иного шанса кроме как искать помощь на стороне.
                        </p>

                        <p>
                            Мы подумали, если Интернет открыл бизнесу новые возможности, то почему цифровые технологии не могут помочь людям, попавшим в сложную ситуацию.
                            Так появился <span className="lp-style-text">LifesPulse</span> - единственная в украинском сегменте сети платформа онлайн-пожертвования, простой и быстрый способ собрать нужное количество денег на
                            лечение детей и взрослых.
                        </p>

                        <p className="p__padding-left">
                            Наша миссия — соединять людей, готовых оказывать финансовую помощь с теми, кто в ней нуждается больше всего.
                        </p>

                        <p className="p__padding-left">
                            Наша цель — создать максимально удобную, эффективную и перспективную онлайн-площадку для поиска финансовых доноров.
                        </p>

                        <p className="p__padding-left">
                            Наша задача — поиск и разработка новых стратегий для мотивации доноров оказывать благотворительность в соответствии с просьбой о помощи.
                        </p>

                        <p>
                            Лечение всегда стоит дорого. Оно может быстро исчерпать страховку, собственные сбережения, возможности родственников, друзей и знакомых.
                            С <span className="lp-style-text">LifesPulse</span>  у вас есть шанс своевременно получить финансовую помощь для оплаты лекарств, медицинских счетов, реабилитации после несчастного случая.
                        </p>

                        <p>
                            Стремимся стать проектом успешных историй. Приложим все усилия, чтобы каждая проблема, описанная нами, была благополучно разрешена.
                            Верим в то, что благодаря помощи неравнодушных людей и нашему сервису, оказавшиеся в тяжелом положении, получат шанс излечиться и выжить.
                            Ведь каждая спасенная жизнь — бесценна!
                        </p>

                    </div>
                </div>

            </div>

        )
    }
};


export default about;