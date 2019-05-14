import React from "react";
import {Link} from "react-router-dom";

import url from "../modules/url"

class adminMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

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
                                    <Link to='/admin/application'>Новые</Link>
                                </li>
                                <li>
                                    <Link to='/admin/active'>Активные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/verify'>Верифицированные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/ban'>Забаненные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/get-money'>Вывод средств</Link>
                                </li>
                                <li>
                                    <Link to='/admin/archive'>Завершенные</Link>
                                </li>
                                <li>
                                    <Link to='/admin/appeal'>Жалобы</Link>
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