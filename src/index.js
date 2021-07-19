import React, { useEffect } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

import api from './services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index(){

    useEffect(() => {
        getGenres();
    },[]);

    async function getGenres(){
        try {
            const response = await api.get('/genre/movie/list', { params: {
                api_key: '8ce31ab8a7283e6a6e8f3d35c0d2e6d0',
                language: 'pt-BR'
            }});

            await AsyncStorage.setItem('@genres_movie', JSON.stringify(response.data.genres));
        } catch (error) {
            
        }

        try {
            const response = await api.get('/genre/tv/list', { params: {
                api_key: '8ce31ab8a7283e6a6e8f3d35c0d2e6d0',
                language: 'pt-BR'
            }});

            await AsyncStorage.setItem('@genres_serie', JSON.stringify(response.data.genres));
        } catch (error) {
            
        }
    }

    return(
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}