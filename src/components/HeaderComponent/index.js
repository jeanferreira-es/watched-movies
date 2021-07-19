import React, { useState } from 'react';
import { Container, SearchBox, Input } from './styles';
import { Button, Box } from '../../styles/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

function index({ theme, navigation, text, setText, showSearch, showAux, showPlus, iconAux, auxFunction, searchFunction, plusFunction }) {
    const [searchClicked, setSearchClicked] = useState(false);

    function clear(){
        setText('');
        setSearchClicked(false);
    }

    return(
        <Container style={{ flexDirection: showSearch == 'none' ? 'row-reverse' : 'row' }}>
            <SearchBox>
                <Button round
                    onPress={() => { if(searchClicked) clear() }}
                    style={{
                        backgroundColor: theme.iconColor, 
                        display: showSearch,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        right: -0.4
                    }}
                >
                    <MaterialCommunityIcons name={ searchClicked ? 'close' : 'magnify'} color={theme.backgroundColor} size={20}/>
                </Button>

                <Input 
                    value={text}
                    onChangeText={(text) => {setText(text); setSearchClicked(true)}}
                    style={{ 
                        backgroundColor: theme.iconColor, 
                        display: showSearch, 
                        color: theme.statusBarColor
                    }} 
                />
            </SearchBox>

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
                        size={iconAux == 'cog' ? 30 : 20}
                    />
                </Button>
                
                <Button round 
                    style={{ 
                        backgroundColor: theme.iconColor, 
                        display: showPlus,
                        marginLeft: 8,
                    }}
                >
                    <MaterialCommunityIcons name='plus' color={theme.backgroundColor} size={20}/>
                </Button>
            </Box>
        </Container>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);