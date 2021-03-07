import React, { useEffect, useContext } from 'react';
import { Text, ScrollView } from 'react-native';
import { Box, Container } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import colors from '../../styles/colors';

import ConfigContext from '../../contexts/config';
import List from '../../components/List';
import { Button } from '../../styles/general';
import { color } from 'react-native-reanimated';

function Header({ iconName, title, color }) {
    const { theme } = useContext(ConfigContext);

    return (
        <>
            <Box>
                <MaterialCommunityIcons name={iconName} color={colors.black} size={15} style={{ 
                    padding: 5, 
                    backgroundColor: color, 
                    borderRadius: 15,
                    marginRight: 10,
                    }}
                />
                <Text style={{color: theme.textColor}}>{title}</Text>
            </Box>
            <Button>
                <Text style={{color: theme.textColor}}>ver todos...</Text>
            </Button>
        </>
    )
}

export default function index(){
    const { darkMode, setDarkMode, theme } = useContext(ConfigContext);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <ScrollView>
                <Box main>
                    <Header iconName='pause' title='Não finalizados' color={colors.yellow}/>
                </Box>
                <List horizontal={true} emptyMessage='Não há nada na lista'/>

                <Box main>
                    <Header iconName='play' title='Não assistido' color={colors.blue}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>

                <Box main>
                    <Header iconName='heart' title='Favoritos' color={colors.red}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>

                <Box main>
                    <Header iconName='check' title='Assistidos' color={colors.green}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>
            </ScrollView>
        </Container>
    )
}