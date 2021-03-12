import React, { useContext } from 'react';
import { Container } from './styles';
import { Button } from '../../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ConfigContext from '../../contexts/config';

export default function index({ navigation, showSearch }) {
    const { theme } = useContext(ConfigContext);

    return(
        <Container style={{ flexDirection: showSearch == 'none' ? 'row-reverse' : 'row' }}>
            <Button round 
                style={{ 
                    backgroundColor: theme.iconColor, 
                    display: showSearch 
                }}
            >
                <MaterialCommunityIcons name='magnify' color={theme.backgroundColor} size={15}/>
            </Button>
            <Button onPress={() => navigation.push('Settings')}>
                <MaterialCommunityIcons name='cog' color={theme.iconColor} size={30}/>
            </Button>
        </Container>
    )
}