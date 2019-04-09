import React from "react";

class DeleteCategoriesPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title
        };

        this.closePopup = this.closePopup.bind(this);
        this.deleteCategories = this.deleteCategories.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }


    deleteCategories(e) {
        e.preventDefault();
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch(`http://165.227.11.173:3001/api/category/${this.state.id}`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": this.props.tokenData
            },
            method: 'DELETE',
            body: JSON.stringify({
                "title": this.state.title
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response);
        })
    }

    render() {
        return (
            <div className="popup m--admin-edit-category" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">
                            <form className="main-form" onSubmit={this.deleteCategories}>
                                <h3>Вы уверены, что хотите удалить категорию <br/>
                                    <span>
                                        {this.state.title} ?
                                    </span>
                                </h3>
                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                        <span>
                                            Удалить
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

export default DeleteCategoriesPopup;