import React from "react";

import Jumbotron from '../components/jumbotron'
import Howitwork from '../components/howitwork'
import Marketing from '../components/marketing'
import BlogHomepage from '../components/blogHomepage'
import CardBlock from '../components/cardBlock'
import LoginPopup from '../components/popup/loginPopup'


class Homepage extends React.Component {

    constructor() {
        super();

        this.state = {
            showPopup: false
        };

        this.togglePopup = this.togglePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.updatePopupStatus = this.updatePopupStatus.bind(this);
    }

    updatePopupStatus () {
        this.setState({
            showPopup: value
        });
    }

    togglePopup(){
            this.setState({
                showPopup: !this.state.showPopup
            });
        }

        closePopup() {
            if(this.state.showPopup) {
                this.setState({
                    showPopup: false
                });
            }

    }

    render() {
        return (
            <div>
                {/*<LoginPopup/>*/}

                <Jumbotron/>

                <CardBlock title={'Популярные компании'}/>

                <Howitwork/>

                <CardBlock title={'Помогать легко'}/>

                <Marketing/>

                <BlogHomepage/>

            </div>

        )
    }
};

export default Homepage;
