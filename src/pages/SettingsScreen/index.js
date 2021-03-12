import React, { useContext } from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import { Text, Button, Box } from '../../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

import ConfigContext from '../../contexts/config';
import disabledIcon from '../../assets/icons/disabled.png';
import enabledIcon from '../../assets/icons/enabled.png';

export default function index() {
    const { theme, darkMode, setDarkMode } = useContext(ConfigContext);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor}}>
            <Box row spaceBetween>
                <Box row>
                    <MaterialCommunityIcons name='brightness-4' color={theme.iconColor} size={20} style={{ marginRight: 10 }}/>
                    <Text style={{ color: theme.textColor }}>Modo escuro</Text>
                </Box>
                <Button onPress={() => setDarkMode(!darkMode)}>
                    <Image source={darkMode ? enabledIcon : disabledIcon}/>
                </Button>
            </Box>
        </Container>
    )
}