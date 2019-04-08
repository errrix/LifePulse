import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group"

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'

class AddCategoryPopup extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.closePopup = this.closePopup.bind(this);
        this.newCategory = this.newCategory.bind(this);
        this.categoryName = this.categoryName.bind(this);
    }

    closePopup(e) {
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }


    categoryName(e) {
        this.setState({title: e.target.value});
    }


    newCategory(e) {
        e.preventDefault();
        console.log(this.state.title)
            fetch('http://165.227.11.173:3001/api/category/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    "title": this.state.title
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((json) => {
                console.log(json.response.id);
            })
    }

    render(){
        return (
            <div className="popup m--admin-add-new-category" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">
                            <form className="main-form" onSubmit={this.newCategory}>
                                <h3>Добавить категорию</h3>
                                <label className="label-input">
                                    <span>Название категории</span>
                                    <input type="text" onChange={this.categoryName}/>
                                    <span className="error">Введите название категории</span>
                                </label>


                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
        <span>
        Сохранить
        </span>
                                        <span className="loader"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            allCategories: []
        };

        this.openPopup = this.openPopup.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
    }

    openPopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handlePopup(value) {
        this.setState({
            showPopup: value
        })
    }

    componentDidMount() {
        console.log('some test');
        fetch('http://165.227.11.173:3001/api/category', {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + this.props.tokenData
            },
            method: 'GET'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response);
        })
    }

    render() {
        return (
            <div>
                <AdminHeader/>
                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>
                        <div className="account-admin-content-block account-admin-categories">
                            <CSSTransitionGroup transitionName="logn-popup"
                                                transitionEnter={true}
                                                transitionEnterTimeout={300}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={300}>
                                {this.state.showPopup ? (<AddCategoryPopup updateStatusPopup={this.handlePopup}/>) : (false)}
                            </CSSTransitionGroup>
                            <header>
                                <h1>
                                    Категории
                                </h1>

                                <button type="button" className="account-admin-new-category" onClick={this.openPopup}>Добавить категорию</button>
                            </header>
                            <div className="account-admin-staff-wrapper">
                                <table className="account-admin-table">
                                    <tbody>
                                    <tr className="title">
                                        <th>№</th>
                                        <th>Категории</th>
                                        <th>Сборы</th>
                                        <th>Действия</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Онкология</td>
                                        <td>321</td>
                                        <td className="button-block">
                                            <div className="popup m--admin-edit-category hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">

                                                            <form className="main-form" action="">
                                                                <h3>Изменить название категории</h3>

                                                                <label className="label-input">
                                                                    <span>Название категории</span>
                                                                    <input type="text" required/>
                                                                    <span
                                                                        className="error">Введите название категории</span>
                                                                </label>

                                                                <div className="button-wrapper">
                                                                    <button type="submit"
                                                                            className="btn m--with-loader">
        <span>
        Сохранить
        </span>
                                                                        <span className="loader"></span>
                                                                    </button>
                                                                </div>

                                                            </form>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-edit-category">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
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
                                    <tr>
                                        <td>2</td>
                                        <td>Сердечно-сосудистые заболевания</td>
                                        <td>1345</td>
                                        <td className="button-block">
                                            <div className="popup m--admin-edit-category hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">

                                                            <form className="main-form" action="">
                                                                <h3>Изменить название категории</h3>

                                                                <label className="label-input">
                                                                    <span>Название категории</span>
                                                                    <input type="text" required/>
                                                                    <span
                                                                        className="error">Введите название категории</span>
                                                                </label>

                                                                <div className="button-wrapper">
                                                                    <button type="submit"
                                                                            className="btn m--with-loader">
        <span>
        Сохранить
        </span>
                                                                        <span className="loader"></span>
                                                                    </button>
                                                                </div>

                                                            </form>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-edit-category">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
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
                                    <tr>
                                        <td>3</td>
                                        <td>Ревматические заболевания</td>
                                        <td>2</td>
                                        <td className="button-block">
                                            <div className="popup m--admin-edit-category hide-popup">
                                                <div className="popup-content-block">
                                                    <div className="popup-content-block-wrapper">
                                                        <div className="popup-step">

                                                            <form className="main-form" action="">
                                                                <h3>Изменить название категории</h3>

                                                                <label className="label-input">
                                                                    <span>Название категории</span>
                                                                    <input type="text" required/>
                                                                    <span
                                                                        className="error">Введите название категории</span>
                                                                </label>

                                                                <div className="button-wrapper">
                                                                    <button type="submit"
                                                                            className="btn m--with-loader">
        <span>
        Сохранить
        </span>
                                                                        <span className="loader"></span>
                                                                    </button>
                                                                </div>

                                                            </form>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <button className="admin-edit-category">
                                                <svg aria-hidden="true" data-prefix="fas" data-icon="pen-square"
                                                     className="svg-inline--fa fa-pen-square fa-w-14"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 448 512">
                                                    <path
                                                        d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/>
                                                </svg>
                                            </button>
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


export default categories;