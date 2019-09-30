import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './utils/session_api_util'
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
    
    // const store = configureStore();
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: { users: { [window.currentUser.id]: window.currentUser } },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
});