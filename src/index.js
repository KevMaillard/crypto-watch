import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"

// REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// ReactDOM.render(
// <Provider store={store}>
// <App /> </Provider>, document.getElementById("root"));

