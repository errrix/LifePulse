import React from "react";

import BackBtnBlock from '../components/backBtnBlock'
import TitleUserCard from '../components/titleUserCard'



class usercard extends React.Component {

    render() {
        return (
            <div>

                <BackBtnBlock/>
                <TitleUserCard/>
            </div>

        )
    }
};

export default usercard;