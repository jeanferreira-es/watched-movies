import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';

import Header from '../../components/HeaderComponent';
import List from '../../components/ListComponent';

function index({ theme }){

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Header showSearch='flex' showPlus='flex' showAux='none' iconAux='filter-variant'/>
            <List horizontal={false} emptyMessage='Não há nenhuma série'/>
        </Container>
    )
}

export default connect(state => ({
    theme: state.theme.theme
}))(index);