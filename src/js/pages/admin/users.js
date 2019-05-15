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
                                    </tr>
                                    {
                                        this.state.allUsers.map((item, index) => {
                                            return <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item.last_name} {item.first_name}</td>
                                                <td>{item.email}</td>
                                                <td>{new Date(Date.parse(item.createdAt)).toLocaleDateString()}</td>
                                                <td>Заявки пользователя</td>
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