import React from "react";


class Complaints extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.HandleChange = this.HandleChange.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    componentDidMount() {
        // document.querySelector('input').focus();
    }

    HandleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }

    HandleSubmit(e) {
        e.preventDefault();
        fetch(`http://165.227.11.173:3001/api/card/complaints/${this.props.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({
                "user": this.props.user_id,
                "text": this.state.text
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            console.log(this.props);
            this.props.updateStatusPopup(false);
            // this.props.history.goBack();
        })
    }


    render() {
        return (
            <div className="popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">
                            <form className="main-form" onSubmit={this.HandleSubmit}>
                                <h3>Пожаловаться на правомерность заявки</h3>
                                <label className="label-input" onChange={this.HandleChange}>
                                    <span>Причина</span>
                                    <textarea/>
                                    <span className="error">Введите причину</span>
                                </label>
                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>
                                            Пожаловаться
                                        </span>
                                        <span className="loader"/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Complaints;