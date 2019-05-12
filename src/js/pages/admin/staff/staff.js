import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group"

import AdminMenu from '../../../components/adminMenu'
import AdminHeader from '../../../components/adminHeader'
import AddNewStaffPopup from './staff-popup/add-new-staff'
// import EditCategoriesPopup from './staff-popup/edit-staff'
// import DeleteCategoriesPopup from './staff-popup/delete-staff'

import url from "../../../modules/url"


class newStaff extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showAddPopup: false,
            showEditPopup: false,
            showDeletePopup: false,
            allUsers: [],
            roles: [],
            // editId: '',
            // editTitle: ''
        };

        this.openAddPopup = this.openAddPopup.bind(this);
        this.openEditPopup = this.openEditPopup.bind(this);
        this.openDeletePopup = this.openDeletePopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }

    openAddPopup() {
        this.setState({
            showAddPopup: !this.state.showAddPopup
        });
    }

    openEditPopup(id, title) {
        this.setState({
            showEditPopup: !this.state.showEditPopup,
            editId: id,
            editTitle: title
        });
    }

    openDeletePopup(id, title) {
        this.setState({
            showDeletePopup: !this.state.showDeletePopup,
            editId: id,
            editTitle: title
        });
    }

    handleClosePopup(value) {
        this.setState({
            showAddPopup: value,
            showEditPopup: value,
            showDeletePopup: value,
            editId: '',
            editTitle: ''
        });
        this.sendData();
    }

    getUsers() {
        fetch(`${url}/api/users/`, {
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

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div>
                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>
                        <div className="account-admin-content-block account-admin-staff">
                            <CSSTransitionGroup transitionName="logn-popup"
                                                transitionEnter={true}
                                                transitionEnterTimeout={300}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={300}>
                                {this.state.showAddPopup ?
                                    <AddNewStaffPopup updateStatusPopup={this.handleClosePopup}/> : false}
                                {/*{this.state.showEditPopup ? <EditCategoriesPopup id={this.state.editId} title={this.state.editTitle} updateStatusPopup={this.handleClosePopup}/> : false}*/}
                                {/*{this.state.showDeletePopup ? <DeleteCategoriesPopup id={this.state.editId} title={this.state.editTitle} updateStatusPopup={this.handleClosePopup}/> : false}*/}
                            </CSSTransitionGroup>
                            <header>
                                <h1>
                                    Команда
                                </h1>

                                <button type="button" className="account-admin-new-staff"
                                        onClick={this.openAddPopup}>Добавить члена команды
                                </button>
                            </header>
                            <div className="account-admin-staff-wrapper">
                                <table className="account-admin-table">
                                    <tbody>
                                    <tr className="title">
                                        <th>№</th>
                                        <th>Пользователь</th>
                                        <th>Почта</th>
                                        <th>Роль</th>
                                        <th>Действия</th>
                                    </tr>

                                    {
                                        this.state.allUsers.map((item, index) => {
                                            if(item.roles.length > 1) {
                                                return <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.last_name} {item.first_name}</td>
                                                    <td>{item.email}</td>
                                                    <td></td>
                                                    <td className="button-block">
                                                        <button className="admin-edit-category">
                                                            <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                                 className="svg-inline--fa fa-pen-square fa-w-14"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 448 512">
                                                                <path
                                                                    d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                            </svg>
                                                        </button>
                                                        <button className="delete-button">
                                                            <svg aria-hidden="true" data-prefix="fas" data-icon="ban"
                                                                 className="svg-inline--fa fa-ban fa-w-16"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 512 512">
                                                                <path
                                                                    d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"/>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            }
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


export default newStaff;