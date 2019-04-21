import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'
import {Link} from "react-router-dom";

class application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.getActiveFundraisers = this.getActiveFundraisers.bind(this);
    }

    getActiveFundraisers() {
        fetch('http://165.227.11.173:3001/api/card/status?', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            // body: JSON.stringify({
            //     "status": "active"
            // }),

            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
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
                                    <tr className="title">
                                        <th>
                            <span>
                                Пользователь
                            </span>

                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                                Пациент
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                                Категория
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Сумма
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Создан
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Окончание
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">

                                                </a>

                                                <a href="/">

                                                </a>
                                            </div>
                                        </th>
                                        <th>Действия</th>
                                    </tr>
                                    <tbody>
                                    <tr>
                                        <td>Камишанченко В.К.</td>
                                        <td>Камишанченко В.К.</td>
                                        <td className="ailment">Сердечно-сосудистые заболевания</td>
                                        <td>80 000</td>
                                        <td>12.01.18</td>
                                        <td>12.01.19</td>
                                        <td className="button-block">
                                            <Link to='/admin/view-campaign' title="просмотр">
fsfdsfsd
                                            </Link>
                                            <Link to='/view-campaign' title="редактировать">

                                            </Link>
                                            <a title="забанить" href="/">

                                            </a>
                                            <a title="удалить" href="/">
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>

                                <div className="account-admin-pagination-wrapper">
                                    <div className="account-admin-pagination">
                                        <a className="active" href="/">1</a>
                                        <a href="/">2</a>
                                        <a href="/">3</a>
                                        <a href="/">...</a>
                                        <a href="/">12</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

        )
    }
};


export default application;