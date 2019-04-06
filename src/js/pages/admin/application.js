import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'
import {Link} from "react-router-dom";

class application extends React.Component {

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
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                                Пациент
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                                Категория
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Сумма
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Создан
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>
                            <span>
                               Окончание
                            </span>
                                            <div className="title-sort-block">
                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>

                                                <a href="/">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-up"
                                                         className="svg-inline--fa fa-arrow-up fa-w-14"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 448 512">
                                                        <path
                                                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr>
                                        <td>Камишанченко В.К.</td>
                                        <td>Камишанченко В.К.</td>
                                        <td className="ailment">Сердечно-сосудистые заболевания</td>
                                        <td>80 000</td>
                                        <td>12.01.18</td>
                                        <td>12.01.19</td>
                                        <td className="button-block">
                                            <Link to='/view-campaign' title="просмотр">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="eye"
                                                     className="svg-inline--fa fa-eye fa-w-18"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 576 512">
                                                    <path
                                                        d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/>
                                                </svg>
                                            </Link>
                                            <Link to='/view-campaign' title="редактировать">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </Link>
                                            <a title="забанить" href="/">
                                                <svg aria-hidden="true" data-prefix="fas"
                                                     data-icon="exclamation-triangle"
                                                     className="svg-inline--fa fa-exclamation-triangle fa-w-18"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path
                                                        d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>
                                                </svg>
                                            </a>
                                            <a title="удалить" href="/">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="ban"
                                                     className="svg-inline--fa fa-ban fa-w-16"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
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