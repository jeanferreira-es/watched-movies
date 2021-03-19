import React from 'react';
import { Container } from './styles';
import { Button, Box } from '../../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

function index({ theme, navigation, showSearch, showAux, showPlus, iconAux, auxFunction, searchFunction, plusFunction }) {

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

            <Box row>
                <Button round 
                    onPress={() => auxFunction()}
                    style={ iconAux == 'cog' ? {} : { 
                        backgroundColor: theme.iconColor, 
                        display: showAux,
                        marginLeft: 8,
                    }}
                >
                    <MaterialCommunityIcons 
                        name={iconAux} 
                        color={iconAux == 'cog' ? theme.iconColor : theme.backgroundColor} 
                        size={iconAux == 'cog' ? 30 : 15}
                    />
                </Button>
                
                <Button round 
                    style={{ 
                        backgroundColor: theme.iconColor, 
                        display: showPlus,
                        marginLeft: 8,
                    }}
                >
                    <MaterialCommunityIcons name='plus' color={theme.backgroundColor} size={15}/>
                </Button>
            </Box>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);