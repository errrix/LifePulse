import React from "react";
import {Link} from "react-router-dom";

class adminMenu extends React.Component {

    render() {
        return (
            <div>

                <div className="account-admin-side-menu">
                    <ul className="account-admin-side-menu-list">
                        <li>
                            <Link to='/application'>Сборы</Link>
                            <ul>
                                <li>
                                    <Link to='/application'>Новые<span className="account-admin-side-menu-count">31</span></Link>
                                </li>
                                <li>
                                    <a href="./application.html">Активные</a>
                                </li>
                                <li>
                                    <a href="./application.html">Завершенные </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to='/ban'>Категория</Link>
                        </li>

                        <li className="active">
                            <Link to='/appeal'>Жалобы<span className="account-admin-side-menu-count">30</span></Link>
                        </li>

                        <li>
                            <Link to='/ban'>Бан</Link>
                        </li>

                        <li>
                            <Link to='/users'>Пользователи</Link>
                        </li>

                        <li>
                            <Link to='/staff'>Команда</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
};

export default adminMenu;