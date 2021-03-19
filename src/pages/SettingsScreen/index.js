import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import { Text, Button, Box } from '../../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { connect } from 'react-redux';
import { setDarkMode } from '../../redux/actions/themeAction';

import disabledIcon from '../../assets/icons/disabled.png';
import enabledIcon from '../../assets/icons/enabled.png';

function index({ darkMode, theme, dispatch }) {     
    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <Box row spaceBetween>
                <Box row>
                    <MaterialCommunityIcons name='brightness-3' color={theme.iconColor} size={20} style={{ marginRight: 10 }}/>
                    <Text style={{ color: theme.textColor }}>Modo escuro</Text>
                </Box>
                <Button onPress={() => dispatch(setDarkMode(!darkMode))}>
                    <Image source={darkMode ? enabledIcon : disabledIcon}/>
                </Button>
            </Box>
        </Container>
    )
}

export default connect( state => ({
    darkMode: state.theme.darkMode,
    theme: state.theme.theme
}))(index);