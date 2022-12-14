import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/Store/store";
import "./firebase";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


