import React, { useEffect, useContext } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Container } from './styles';

import ConfigContext from '../../contexts/config';

export default function index(){
    const { darkMode, setDarkMode, theme } = useContext(ConfigContext);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Text>Home Screen</Text>
            <TouchableHighlight
                onPress={() => setDarkMode(!darkMode)}
            >
                <Text style={{ color: theme.textColor }}>Alterar modo</Text>
            </TouchableHighlight>
        </Container>
    )
}