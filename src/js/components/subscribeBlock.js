import React from "react";
import url from "../modules/url";
import PopupThxSubsc from "./popup/popupThxSubsc";

class Subscribeblock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            validate_email: false,
            success: false
        };


        this.submitEmail = this.submitEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    validateEmail() {
        let elem = document.getElementById("subscribe-email");
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(elem.value)) {
            this.setState({validate_email: true});
            elem.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_email: false});
            elem.parentNode.classList.add('label-error');
        }
    }

    handleChange(e) {
        this.setState({email: e.target.value})
    }

    closePopup() {
        this.setState({success: false})
    }

    submitEmail(e) {
        e.preventDefault();
        this.validateEmail();
        setTimeout(()=>{
            if(this.state.validate_email) {
                document.querySelector('.loader').classList.add('active-loader', 'm--loader');
                fetch(`${url}/api/subscribe`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({
                        "email": this.state.email
                    })
                })
                    .then(function (response) {
                        return response.json()
                    }).then((data) => {
                    // console.log(data);
                    this.setState({success: true, email:''})
                    document.querySelector('.loader').classList.remove('active-loader', 'm--loader');
                }).catch(function (error) {
                });
            }
        },0)

    }

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
                            <form className="main-form" onSubmit={this.submitEmail}>
                                <label className="label-input">
                                    <input aria-label="Введите Ваш e-mail"
                                           type="email"
                                           placeholder="Введите Ваш e-mail"
                                           id="subscribe-email"
                                           value={this.state.email}
                                           onBlur={this.validateEmail}
                                           onChange={this.handleChange}/>
                                    <span className="error">Введите коректную почту</span>
                                </label>
                                <button
                                    aria-label="Подписаться на рассылку"
                                    type="submit"
                                    className="btn m--with-loader">
                                    <span>
                                        Подписаться
                                    </span>
                                    <span className="loader"/>
                                </button>
                            </form>
                            {this.state.success ? (
                                <PopupThxSubsc closePopup={this.closePopup}/>
                            ):false}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Subscribeblock;