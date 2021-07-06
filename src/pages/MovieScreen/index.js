import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import api from '../../services/api';

import Header from '../../components/HeaderComponent';
import List from '../../components/ListComponent';

function index({ theme, navigation }){
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        listMovies();
    },[text]);

    async function listMovies(){
        try {
            const response = await api.get('/search/movie', { params: {
                api_key: '8ce31ab8a7283e6a6e8f3d35c0d2e6d0',
                query: text,
                language: 'pt-BR',
                page: 1,
                include_adult: false
            }});

            setData(response.data.results);
        } catch (error) {
            
        }
    }

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Header navigation={navigation} text={text} setText={setText} showSearch='flex' showPlus='flex' iconAux='filter-variant'/>
            <List horizontal={false} emptyMessage='Não há nenhum filme' data={data} navigation={navigation}/>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);