import React from "react";
import url from "../../../../modules/url"

class EditCategoriesPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title
        };

        this.closePopup = this.closePopup.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.categoryName = this.categoryName.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }


    categoryName(e) {
        this.setState({title: e.target.value});
    }


    editCategory(e) {
        e.preventDefault();
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch(`${url}/api/category/${this.state.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                "title": this.state.title
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response.id);
            this.props.updateStatusPopup(false);
        })
    }

    render() {
        return (
            <div className="popup m--admin-edit-category" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">
                            <form className="main-form" onSubmit={this.editCategory}>
                                <h3>Изменить название категории</h3>
                                <label className="label-input">
                                    <span>Название категории</span>
                                    <input type="text" required value={this.state.title} onChange={this.categoryName}/>
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

export default EditCategoriesPopup;