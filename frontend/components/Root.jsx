import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({store}) => (
    <div>
        <Provider store={store}>
            <HashRouter>
                <App></App>
            </HashRouter>
        </Provider>
    </div>
);

export default Root;