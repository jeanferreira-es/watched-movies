import React from 'react';
import { Container } from './styles';
import { Text } from '../../styles/general';
import { connect } from 'react-redux';

function index({ theme, message }) {
    
    return(
        <Container style={{ backgroundColor: theme.opaqueColor}}>
            <Text small style={{ color: theme.subTextColor}}>{ message }</Text>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);