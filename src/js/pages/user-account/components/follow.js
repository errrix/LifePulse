import React from "react";

import SingleCard from './../../../components/singleCard'

class MyFollow extends React.Component {

    render() {

        return (
            <div className="follow active">
                <div className="card-block">
                    <ul className="card-block-list card-block-list-flex">
                        <li>
                            <SingleCard/>
                        </li>
                        <li>
                            <SingleCard/>
                        </li>
                        <li>
                            <SingleCard/>
                        </li>
                        <li>
                            <SingleCard/>
                        </li>
                    </ul>

                    <div className="button-wrapper">
                        <button type="submit" className="btn m--with-loader">
                            <span>Посмотреть еще</span>
                            <span className="loader"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};


export default MyFollow;