import React from "react";
import Subscribeblock from "../../components/subscribeBlock";

import faqData from "./data"

class Faq extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | F.A.Q."
    }

    constructor(props) {
        super(props);

        this.state = {
            data: faqData
        };

        // this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer(e) {
        e.currentTarget.parentNode.classList.toggle('show-more');
    }

    render() {
        return (
            <div>
                <div className="faq-block">
                    <div className="container">
                        <h1 className="h2Header">Ответы на самые частые вопросы</h1>

                        <div className="faq-dropdown-block" onClick={this.toggleAnswer}>

                            {this.state.data.map((item, index)=> {
                                return <div className="faq-dropdown-item" key={index}>
                                    <div className="faq-dropdown-question" onClick={this.toggleAnswer}>
                                        <p>{item.q}</p>
                                    </div>
                                    <div className="faq-dropdown-show-more faq-dropdown-hide">
                                        <p>
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            })}
                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Кто может пожертвовать деньги?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Перечислить деньги на благотворительность может любой пользователь ресурса lifespulse*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Какую сумму можно перечислить и кому?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*В разделе «Начать помогать» мы публикуем истории нуждающихся людей. Вы можете стать донором для любого проекта и пожертвовать любую сумму от 20 грн, используя карту любого банка через платежную систему LiqPay.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Какую часть средств оставляет себе ваш фонд?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*LifesPulse взымает 7% с каждого выведенного пожертвования. Если пользователь не получает пожертвований, то плата не взымается.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Что вы можете предложить своим жертвователям (донорам) взамен?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Постоянным благотворителям предлагаем сотрудничество по размещению рекламы на страницах нашего сайта в виде статических, динамических банеров или текстовых блоков*/}
                                        {/*либо статью в нашем Блоге со словами благодарности за активное участие в благотворительности.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Как узнать, что мои деньги помогли?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Для зарегистрированных пользователей в личном кабинете будет видна история помощи.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Что такое личный кабинет?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Личный кабинет на LifesPulse — это закрытый от посторонних лиц раздел сайта, доступный только для зарегистрированных пользователей. Для входа в личный кабинет используется тот же адрес электронной почти, что и при регистрации. Сейчас личный кабинет позволяет видеть историю помощи и создавать собственные благотворительные истории. По мере развития ресурса мы оставляем за собой право изменять инструменты личного кабинета.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Я не желаю регистрироваться, но хотел бы помочь. Это возможно?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Да, вы можете профинансировать любую кампанию на сайте, перейдя в раздел «Начать помогать». Кроме этого, незарегистрированный пользователь также может:*/}
                                        {/*оформить подписку на нашу новостную рассылку,*/}
                                        {/*оказать финансовую помощь нашему сервису,*/}
                                        {/*поделиться понравившимся проектом в своих социальных сетях.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Кто может разместить заявку на сбор средств?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Разместись заявку на сбор пожертвований может любой  человек достигший совершеннолетия. Порядок оформления предусматривает обязательно: регистрацию на сервисе, скан больничных документов и первой страницы паспорта. После оформления заявки она будет проверена модератором и опубликована.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Когда я могу получить деньги, которые собрала моя заявка?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Вывести денежные средства можно в полном объеме или в сумме не меньше, чем 500 гривен. Вывод средств означает, что заявка выполнена и сбор денег по ней останавливается. В течение 5 рабочих дней деньги будут зачислены на указанный счет в банке.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}


                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Могу ли я создать еще одну заявку?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Один пользователь может создать одну заявку. Если необходимо начать новый сбор средств на того же человека, что в первой заявке или на другого человека (например: родственник, друг, ребенок), то перед этим в личном кабинете к Вашей первой заявке необходимо прикрепить отчет о целевом использовании собранных и выведенных Вами средств по прошлому сбору.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Могу ли я создать сбор средств не для себя а для другого человека?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Да, можете. Вам потребуется 2 скана паспорта: свой и реципиента. Кроме того, при создании заявки в соответствующей форме вы должны будете указать для кого создается сбор средств. Для проверки и дополнительного уточнения информации с Вами может связаться модератор.*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="faq-dropdown-item">*/}
                                {/*<div className="faq-dropdown-question">*/}
                                    {/*<p>*/}
                                        {/*Кто имеет доступ к моим личным данным и сканам документов?*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div className="faq-dropdown-show-more faq-dropdown-hide">*/}
                                    {/*<p>*/}
                                        {/*Все действия на LifesPulse являются безопасными. Мы гарантируем надежную защиту ваших персональных данных. Скан паспорта, больничных документов не будут доступны другим пользователям: они нужны лишь нашим модераторам для подтверждения указанной вами информации. Фото, которые вы хотите приложить для общего доступа можно добавлять в пункте "Ваша история".*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}


                        </div>
                    </div>
                </div>
                <Subscribeblock/>
            </div>

        )
    }
};

export default Faq;