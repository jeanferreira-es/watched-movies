import React, { useContext } from 'react';
import { Container } from './styles';
import { Text } from '../../styles/general';
import ConfigContext from '../../contexts/config';

export default function index({ message }) {
    const { theme } = useContext(ConfigContext);
    
    return(
        <Container style={{ backgroundColor: theme.barColor}}>
            <Text style={{ color: theme.statusBarColor}}>{ message }</Text>
        </Container>
    )
}