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
    }

    getAmountCard() {
        fetch('http://165.227.11.173:3001/api/card/amount/?', {
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

    componentDidMount() {
        this.getAmountCard();
    }


    render() {
        return (
            <div>
                <Jumbotron/>

                <CardBlock title={'Популярные компании'} cards={this.state.amount_card}/>

                <Howitwork/>

                <CardBlock title={'Помогать легко'}/>

                <Marketing/>

                <BlogHomepage/>

            </div>

        )
    }
};

export default Homepage;
