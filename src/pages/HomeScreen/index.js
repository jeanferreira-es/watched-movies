import React, { useEffect } from 'react';
import { Text, ScrollView, Dimensions } from 'react-native';
import { Box, Container } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { Button } from '../../styles/general';
import colors from '../../styles/colors';
import { connect } from 'react-redux';
import { increase, decrease } from '../../redux/actions/counterAction';

import Header from '../../components/HeaderComponent';
import List from '../../components/ListComponent';

const { width, height } = Dimensions.get('window');

function Title({ iconName, title, color, theme }) {
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
                <Text style={{ color: theme.textColor}}>{title}</Text>
            </Box>
            <Button>
                <Text style={{ color: theme.textColor }}>ver todos...</Text>
            </Button>
        </>
    )
}

function index({ navigation, value, theme }){
    useEffect(() => {
        increase();
        console.log(value);
        console.log(width);
        console.log(height);
    },[]);

    return(
        <Container style={{ backgroundColor: theme.backgroundColor }}>
            <ScrollView style={{ paddingBottom: 100}}>
            <Header auxFunction={() => navigation.push('Settings')} showSearch='none' showPlus='none' iconAux='cog'/>
                <Box main>
                    <Title iconName='pause' title='Não finalizados' color={colors.yellow} theme={theme}/>
                </Box>
                <List horizontal={true} emptyMessage='Não há nada na lista'/>

                <Box main>
                    <Title iconName='play' title='Não assistido' color={colors.blue} theme={theme}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>

                <Box main>
                    <Title iconName='heart' title='Favoritos' color={colors.red} theme={theme}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>

                <Box main>
                    <Title iconName='check' title='Assistidos' color={colors.green} theme={theme}/>
                </Box>
                <List horizontal={true} emptyMessage='Nessa também não tem'/>
            </ScrollView>
        </Container>
    )
}

export default connect(state => ({ 
    value: state.counter.value, 
    theme: state.theme.theme
}))(index);