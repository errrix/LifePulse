import React from "react";
import validator from "./validator";
import url from "../../../modules/url"

//TODO переделать в глупый компонент
class FileLoader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <label className="label-file">
                {this.props.item !== null && this.props.item ? (
                    <div>
                        <img
                            src={`${url}/uploads/${this.props.item.filename}`}
                            alt=""/>
                        <button className="btn btn-transparent"
                                name={this.props.name}
                                onClick={this.props.deleteImage}>Удалить фото
                        </button>
                    </div>
                ) : (
                    <fieldset>
                        <span className="btn btn-transparent">ВЫБРАТЬ</span>
                        <input type="file"
                               id={this.props.name}
                               name={this.props.name}
                               accept="image/x-png,image/jpeg"
                               onChange={this.props.LoadImage}/>
                    </fieldset>
                )}
                <span className="error">Добавьте фото</span>
            </label>
        )
    }
};


export default FileLoader;