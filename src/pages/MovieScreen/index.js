import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';

import Header from '../../components/HeaderComponent';
import List from '../../components/ListComponent';

function index({ theme, navigation }){

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Header navigation={navigation} showSearch='flex' showPlus='flex' iconAux='filter-variant'/>
            <List horizontal={false} emptyMessage='Não há nenhum filme'/>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);