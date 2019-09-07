//react
import React from "react";
import ReactDOM from "react-dom";
//components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

    // test
    // window.getState = store.getState;
    // window.dipsatch = store.dispatch;
});