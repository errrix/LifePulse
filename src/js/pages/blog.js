import React from "react";
import {Link} from "react-router-dom";

class blog extends React.Component {
    componentDidMount(){
        document.title = "LifesPulse | Блог"
    }

    render() {
        return (
            <div>
                <div className="blog-block">
                    <div className="container">
                        <h3 className="h3Header">Блог в стадии разработки и будет доступен в ближайшее время.</h3>
                    </div>
                </div>

            </div>

        )
    }
};


export default blog;