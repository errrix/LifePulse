import React from "react";

import SingleCard from './../../../components/singleCard'

class MyCampaignList extends React.Component {

    render() {

        return (
            <div className="my-campaign active">
                <div className="card-block">
                    <ul className="card-block-list card-block-list-flex">
                        <li>
                            <SingleCard/>
                        </li>
                        <li className="m--add-new">
                            <a href="/">
                                <div className="add-icon m--large"/>
                                <span>Добавить новую публикацию</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};


export default MyCampaignList;