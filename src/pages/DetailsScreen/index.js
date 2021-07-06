import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import { connect } from 'react-redux';

function index({ theme }){
    return(
        <Container style={{ backgroundColor: theme.backgroundColor}}>
            <Text>Details Screen</Text>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);