import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import { connect } from 'react-redux';

function index({ theme, navigation, route }){
    const [data, setData] = useState(route.params);

    useEffect(() => {
        navigation.setOptions({
            title: data.name
        })
    },[]);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor}}>
            <Text>Details Screen</Text>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);