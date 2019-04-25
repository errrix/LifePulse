import React from "react";
import {Link} from "react-router-dom";

class adminMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.getDraftFundraisers = this.getDraftFundraisers.bind(this);
    }

    getDraftFundraisers() {
        fetch('http://165.227.11.173:3001/api/card/status?limit=222', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "status": "draft"
            }),

            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response[3]);
            this.setState({cards: json.response})
        })
    }

    componentDidMount() {
        this.getDraftFundraisers();
    }

    render() {
        return (
            <div>

                <div className="account-admin-side-menu">
                    <ul className="account-admin-side-menu-list">
                        <li>
                            <p>Сборы</p>
                            <ul>
                                <li>
                                    <Link to='/admin/application'>Новые<span className="account-admin-side-menu-count">{this.state.cards.length}</span></Link>
                                </li>
                                <li>
                                    <Link to='/admin/active'>Активные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/ban'>Забаненные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/verify'>Верифицированные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/get-money'>Вывод средств</Link>
                                </li>
                                <li>
                                    <Link to='/admin/archive'>Завершенные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/appeal'>Жалобы<span className="account-admin-side-menu-count">0</span></Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to='/admin/categories'>Категория</Link>
                        </li>

                        <li>
                            <Link to='/admin/users'>Пользователи</Link>
                        </li>

                        <li>
                            <Link to='/admin/staff'>Команда</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
};

export default adminMenu;