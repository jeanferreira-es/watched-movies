import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

import ConfigContext from '../../contexts/config';

export default function index(){
    const { theme } = useContext(ConfigContext);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor}}>
            <Text>Shared Screen</Text>
        </Container>
    )
}