import React from "react";
import url from "../../../../modules/url"


class CardStatusPopup extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.closePopup = this.closePopup.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
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
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }

    HandleSubmit(e) {
        e.preventDefault();
        let url1, method, data;
        console.log(this.props.action);
        if( this.props.action === 'delete') {
            url1 =`${url}/api/card/delete/${this.props.id}`;
            method = 'PUT';
            data = JSON.stringify({
                "status": "",
                "text": this.state.text,
                "title": this.props.title,
                "email": this.props.email
            })
        } else {
            url1=`${url}/api/card/upd_status/${this.props.id}`;
            method = 'PUT';
            data = JSON.stringify({
                "status": this.props.action,
                "text": this.state.text,
                "title": this.props.title,
                "email": this.props.email
            })
        }
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch(url1, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: method,
            credentials: 'include',
            body: data
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            console.log(this.props);
            this.props.handleStatusPopup();
            // this.props.history.goBack();
        })
    }



    render(){
        return (
            <div className="popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--change-status">
                            <form className="main-form" onSubmit={this.HandleSubmit}>
                                <h3>{this.props.title}</h3>
                                <label className="label-input" onChange={this.HandleChange}>
                                    <span>Причина</span>
                                    <textarea/>
                                    <span className="error">Введите причину</span>
                                </label>
                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>
                                            {this.props.title}
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

export default CardStatusPopup;