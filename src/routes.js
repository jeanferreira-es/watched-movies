import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import colors from './styles/colors';

//Importação das páginas 
import TabScreen from './pages/TabScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';

const Stack   = createStackNavigator();

function Routes({ theme }){

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Tab'
                headerMode='screen'
                screenOptions={{
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: colors.black
                    },
                }}
            >
                <Stack.Screen name='Tab' component={TabScreen} options={{ headerShown: false }}/>
                <Stack.Screen name='Settings' component={SettingsScreen} 
                    options={{
                        headerShown: true,
                        headerTitle: 'Configurações',
                        headerTitleStyle: {
                            color: theme.textColor,
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.textColor,
                    }}
                />
                <Stack.Screen name='Details' component={DetailsScreen} 
                    options={{
                        headerShown: true,
                        headerTitleStyle: {
                            color: theme.textColor,
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.textColor,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default connect(state => ({ theme: state.theme.theme}))(Routes);