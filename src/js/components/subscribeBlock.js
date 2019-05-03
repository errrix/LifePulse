import React from "react";

class Subscribeblock extends React.Component {

    render() {
        return (
            <div>

                <div className="subscribe-block">
                    <div className="container">
                        <img src="/img/subscrible-img.jpg" alt=""/>
                        <div className="subscribe-block-wrapper">
                            <h2 className="h3Header">
                                Следите за новостями LIFES<span>PULSE</span>
                            </h2>
                            <form>
                                <label>
                                    <input aria-label="Введите Ваш e-mail" type="email" required placeholder="Введите Ваш e-mail"/>
                                </label>
                                <button aria-label="Подписаться на рассылку" type="submit" className="btn">
                                    Подписаться
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Subscribeblock;