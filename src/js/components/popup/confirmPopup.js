import React from "react";
import url from "../../modules/url"

class ConfirmPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            thx_msg: false
        };

        this.closePopup = this.closePopup.bind(this);
        this.submitChangeStatus = this.submitChangeStatus.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.closePopup();
        }
    }

    submitChangeStatus(e) {
        e.preventDefault();
        console.log(this.props.id);

        fetch(`${url}/api/card/upd_status/${this.props.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            credentials: 'include',
            body: JSON.stringify({
                "status": "complite",
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            this.setState({thx_msg: true})
        })
    }

    render() {
        return (
            <div className="popup" onMouseDown={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login">


                            {this.state.thx_msg ?(
                                <div>
                                    <p>
                                        Спасибо за пользовние сервисом, когда Ваш запрос будет обработан Вам прийдет письмо на почту
                                    </p>
                                    <button type="button"
                                            className="btn"
                                            onClick={()=>{this.props.closePopup()}}>
                                       Ок
                                    </button>

                                </div>
                                ) : (
                                <form className="main-form" action="">

                                    <p>Вы уверены, что хотите прекратить сбор средств и получить деньги?</p>
                                    <p>
                                        После подтверждния Вы не сможете продолжать сбор средств по этой заявке
                                    </p>
                                    <div className="button-wrapper">
                                        <button type="submit"
                                                className="btn m--with-loader"
                                                onClick={this.submitChangeStatus}
                                        >
                                        <span>
                                            Закончить сбор средств
                                        </span>
                                            <span className="loader"/>
                                        </button>
                                        <button type="button"
                                                className="btn"
                                                onClick={()=>{this.props.closePopup()}}>
                                            Продолжить сбор средств
                                        </button>
                                    </div>


                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};


export default ConfirmPopup;
