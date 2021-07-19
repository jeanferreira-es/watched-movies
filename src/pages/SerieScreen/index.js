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

    useEffect(()=>{
        if(text === ''){
            setData([]);
            return;
        }
        listSeries([]);
    },[text]);

    useEffect(()=>{
        listSeries(data);
    },[page]);

    async function listSeries(arr){
        if(loading) return;
        
        setLoading(true);
        try {
            const response = await api.get('/search/tv', { params: {
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
                type='serie'
                loading={loading}
                setPage={setPage}
                horizontal={false}
                navigation={navigation} 
                emptyMessage='Não há nenhuma série'
            />
        </Container>
    )
}

export default connect(state => ({
    theme: state.theme.theme
}))(index);