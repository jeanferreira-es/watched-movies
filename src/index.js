import React from 'react';
import Routes from './routes';
import { ConfigProvider } from './contexts/config';

export default function index(){
    return(
        <ConfigProvider>
            <Routes/>
        </ConfigProvider>
    )
}