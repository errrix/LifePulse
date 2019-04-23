import React from "react";

import AdminMenu from '../../../../components/adminMenu'
import AdminHeader from '../../../../components/adminHeader'
import {Link} from "react-router-dom";
import SingleCard from "../../../../components/cardBlock";

class ban extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.getActiveFundraisers = this.getActiveFundraisers.bind(this);
    }

    getActiveFundraisers() {
        fetch('http://165.227.11.173:3001/api/card/status?limit=222', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "status": "ban"
            }),

            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response[0]);
            this.setState({cards: json.response})
        })
    }

    componentDidMount() {
        this.getActiveFundraisers();
    }

    render() {
        return (
            <div>
                <AdminHeader/>
                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>
                        <div className="account-admin-content-block account-admin-application">
                            <header>
                                <h1>
                                    Новые сборы
                                </h1>
                            </header>
                            <div className="account-admin-application-wrapper">
                                <table className="account-admin-table m--big-table">
                                    <tbody>
                                    <tr className="title">
                                        <th>Пользователь</th>
                                        <th>Пациент</th>
                                        <th>Дата создания</th>
                                        <th>Дата бана</th>
                                        <th>Причина бана</th>
                                        <th>Действия</th>
                                    </tr>
                                    {this.state.cards ? this.state.cards.map((item) => {
                                        return <tr key={item._id}>
                                            <td>{item.user[0].first_name + ' ' + item.user[0].last_name}</td>
                                            <td>{item.for_whom_name}</td>
                                            {/*<td>{item.category[0].title}</td>*/}
                                            <td>{item.max_sum}/{item.sum}</td>
                                            <td>{new Date(Date.parse(item.createdAt)).toLocaleDateString()}</td>
                                            <td> <Link to={`/admin/view-campaign/${item._id}`} target="">Edit</Link> </td>
                                        </tr>
                                    }) : false
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};


export default ban;