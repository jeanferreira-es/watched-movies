import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function index(){
    return(
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}