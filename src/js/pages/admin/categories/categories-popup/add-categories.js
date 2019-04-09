import React from "react";

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

    componentDidMount() {
        document.querySelector('input').focus();
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
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        fetch('http://165.227.11.173:3001/api/category/', {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": this.props.tokenData
            },
            method: 'POST',
            body: JSON.stringify({
                "title": this.state.title
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.props.updateStatusPopup(false);
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

export default AddCategoryPopup;