import React from "react";

class PopupThxSubsc extends React.Component {

    constructor(props) {
        super(props);

        this.closePopup = this.closePopup.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.closePopup();
        }
    }

    render() {
        return (
            <div className="popup" onMouseDown={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--confirm-end-fund">
                            <div>
                                <p className="title">
                                    Спасибо.
                                </p>
                                <p>Вы подписаны на рассылку важных новостей.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default PopupThxSubsc;
