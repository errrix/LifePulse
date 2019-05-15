import React from "react";
import url from "../../modules/url"


class ResendTokenPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sended: false
        };

        this.resendToken = this.resendToken.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.closeResendPopup();
        }
    }


    resendToken() {
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch(`${url}/api/users/resend`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                "email": this.props.email
            })
        })
            .then(function (response) {
                return response.json()
            }).then((data) => {
            console.log(data);
            this.setState({sended: true})
            document.querySelector('.loader').classList.remove('active-loader', 'm--loader');
        }).catch(function (error) {
            // console.log(error);
        });
    }

    render() {
        return (
            <div className="popup"
                 onMouseDown={this.closePopup}
                 onTouchStart={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">

                        {this.state.sended ? (
                            <div className="popup-step m--resend-token">
                                <h2 className="h3Header">Письмо отправленно повторно</h2>
                                <p className="paragraph">Для активации Вашей учетной записи перейдите по ссылке в письме</p>
                            </div>
                            ): (
                            <div className="popup-step m--resend-token">
                                <h2 className="h3Header">Ваша учетная запись не активирована</h2>
                                <p className="paragraph">Для активации учетной записи Вам на почту было отправленно письмо при регистрации</p>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader" onClick={this.resendToken}>
                                <span>
                                     Отправить письмо повторно
                                </span>
                                        <span className="loader"/>
                                    </button>
                                </div>


                            </div>
                            )}


                    </div>
                </div>
            </div>
        )
    }
};

export default ResendTokenPopup;
