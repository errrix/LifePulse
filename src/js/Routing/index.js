import React from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../reducer/';
import MainRouting from './main-routing';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class MainRouter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <MainRouting/>
            </Provider>
        )
    }
};

export default MainRouter;