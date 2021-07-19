import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import api from '../../services/api';

import Header from '../../components/HeaderComponent';
import List from '../../components/ListComponent';

function index({ theme, navigation }){
    const [page, setPage] = useState(1);
    const [text, setText] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(text === ''){
            setData([]);
            return;
        }
        listMovies([]);
    },[text]);

    useEffect(() => {
        listMovies(data);
    },[page]);

    async function listMovies(arr){
        if(loading) return;
        
        setLoading(true);
        try {
            const response = await api.get('/search/movie', { params: {
                api_key: '8ce31ab8a7283e6a6e8f3d35c0d2e6d0',
                query: text,
                language: 'pt-BR',
                page,
                include_adult: false
            }});

            setData([...arr,...response.data.results]);
        } catch (error) {
            
        } finally{
            setLoading(false);
        }
    }

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Header 
                text={text} 
                showPlus='flex' 
                showSearch='flex' 
                setText={setText} 
                navigation={navigation} 
                iconAux='filter-variant'
            />

            <List 
                data={data} 
                page={page}
                type='movie'
                loading={loading} 
                setPage={setPage}
                horizontal={false} 
                navigation={navigation} 
                emptyMessage='Não há nenhum filme' 
            />
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);