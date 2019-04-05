import React from "react";

class adminMenu extends React.Component {

    render() {
        return (
            <div>

                <div className="account-admin-side-menu">
                    <ul className="account-admin-side-menu-list">
                        <li>
                            <a href="./application.html">Сборы</a>
                            <ul>
                                <li>
                                    <a href="./application.html">
                                <span>
                                    Новые
                                </span>
                                        <span className="account-admin-side-menu-count">
                                    31
                                </span>
                                    </a>
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
                            <a href="./categories.html">Категория</a>
                        </li>

                        <li className="active">
                            <a href="./appeal.html">
                        <span>
                                    Жалобы
                        </span>
                                <span className="account-admin-side-menu-count">
                                    31
                        </span>
                            </a>
                        </li>

                        <li>
                            <a href="./ban.html">Бан</a>
                        </li>

                        <li>
                            <a href="./users.html">Пользователи</a>
                        </li>

                        <li>
                            <a href="./staff.html">Команда</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
};

export default adminMenu;