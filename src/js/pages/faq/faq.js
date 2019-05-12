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
                        </div>
                    </div>
                </div>
                <Subscribeblock/>
            </div>

        )
    }
};

export default Faq;