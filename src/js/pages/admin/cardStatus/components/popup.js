import React from "react";


class CardStatusPopup extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        };

        this.closePopup = this.closePopup.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    componentDidMount() {
        // document.querySelector('input').focus();
    }

    closePopup(e) {
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }

    HandleSubmit(e) {
        e.preventDefault();
        let url, method, data;
        console.log(this.props.action)
        if( this.props.action === 'delete') {
            url =`http://165.227.11.173:3001/api/card/${this.props.id}`;
            method = 'DELETE';
            data = ''
        } else {
            url=`http://165.227.11.173:3001/api/card/upd_status/${this.props.id}`;
            method = 'PUT';
            data = JSON.stringify({
                "status": this.props.action
            })
        }
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch(url, {
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
            this.props.updateStatusPopup(false);
        })
    }



    render(){
        return (
            <div className="popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">
                            <form className="main-form" onSubmit={this.HandleSubmit}>
                                <h3>{this.props.title}</h3>
                                <label className="label-input">
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