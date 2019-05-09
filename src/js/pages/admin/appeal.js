import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'
import {Link} from "react-router-dom";

import url from "../../modules/url"

class appeal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.getAppealFundraisers = this.getAppealFundraisers.bind(this);
    }

    getAppealFundraisers() {
        fetch(`${url}/api/card/status?limit=222`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "status": "appeal"
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
        this.getAppealFundraisers();
    }

    render() {
        return (
            <div>
                <AdminHeader/>
                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>
                        <div className="account-admin-content-block account-admin-appeal">
                            <header>
                                <h1>
                                    Жалобы
                                </h1>
                            </header>
                            <div className="account-admin-appeal-wrapper">
                                <table className="account-admin-table">
                                    <tbody>
                                    <tr className="title">
                                        <th>Пользователь</th>
                                        <th>Пациент</th>
                                        <th>Дата создания</th>
                                        <th>Сообщение</th>
                                        <th>Сбор</th>
                                        <th>Сумма</th>
                                        <th>Действия</th>
                                    </tr>
                                    {this.state.cards ? this.state.cards.map((item) => {
                                        return <tr key={item._id}>
                                            <td>{item.user[0].first_name + ' ' + item.user[0].last_name}</td>
                                            <td>{item.for_whom_name}</td>
                                            <td>{new Date(Date.parse(item.createdAt)).toLocaleDateString()}</td>
                                            <td>!!!!!!</td>
                                            <td>!!!!!!</td>
                                            <td>{item.max_sum}/{item.sum}</td>
                                            <td> <Link to={`/admin/view-campaign/${item._id}`} target="">View</Link> </td>
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


export default appeal;