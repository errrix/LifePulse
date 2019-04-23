import React from "react";

import Jumbotron from '../../components/jumbotron'
import Howitwork from '../../components/howitwork'
import Marketing from '../../components/marketing'
import BlogHomepage from '../../components/blogHomepage'
import CardBlock from '../../components/cardBlock'

class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amount_card: []
        };

        this.getAmountCard = this.getAmountCard.bind(this);
        this.getActiveCard = this.getActiveCard.bind(this);
    }

    getAmountCard() {
        fetch('http://165.227.11.173:3001/api/card/amount/?limit=3', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
                this.setState({amount_card: json.response})
        })
    }

    getActiveCard() {
        fetch('http://165.227.11.173:3001/api/card/active/?limit=3', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({active_card: json.response})
        })
    }

    componentDidMount() {
        console.log('dsadsa123')
        this.getAmountCard();
        this.getActiveCard();
    }


    render() {
        return (
            <div>
                <Jumbotron/>

                <CardBlock title={'Популярные компании'} cards={this.state.amount_card}/>

                <Howitwork/>

                <CardBlock title={'Помогать легко'}  cards={this.state.active_card}/>

                <Marketing/>

                <BlogHomepage/>

            </div>

        )
    }
};

export default Homepage;
