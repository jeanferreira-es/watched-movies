import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import colors from './styles/colors';

//Importação das páginas 
import TabScreen from './pages/TabScreen';
import SettingsScreen from './pages/SettingsScreen';

import ConfigContext from './contexts/config';

const Stack   = createStackNavigator();

export default function Routes(){
    const { theme } = useContext(ConfigContext);

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
                        headerTintColor: theme.textColor
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}