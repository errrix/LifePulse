import React from "react";
import Subscribeblock from "../components/subscribeBlock";
import {Link} from "react-router-dom";

class successStories extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Успешные сборы"
    }

    render() {
        return (
            <div>
                <div className="success-stories-block">
                    <div className="container">

                    </div>
                </div>
                <Subscribeblock/>
            </div>

        )
    }
};


export default successStories;