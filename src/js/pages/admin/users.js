import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'

import url from "../../modules/url"

class users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allUsers: []
        };

        // this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch(`${url}/api/users?limit=100`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({allUsers: json.message});
            console.log(this.state.allUsers)
        })
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
                                    ПОЛЬЗОВАТЕЛИ
                                </h1>
                            </header>

                            <div className="account-admin-appeal-wrapper">
                                <table className="account-admin-table">
                                    <tbody>
                                    <tr className="title">
                                        <th>№</th>
                                        <th>Пользователь</th>
                                        <th>email</th>
                                        <th>Дата регистрации</th>
                                        <th>Заявки</th>
                                        <th>Действия</th>
                                    </tr>
                                    {
                                        this.state.allUsers.map((item, index) => {
                                            return <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item.last_name} {item.first_name}</td>
                                                <td>{item.email}</td>
                                                <td>{new Date(Date.parse(item.createdAt)).toLocaleDateString()}</td>
                                                <td>Заявки пользователя</td>
                                                <td className="button-block">
                                                    <a href="/">
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
                                        })
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


export default users;