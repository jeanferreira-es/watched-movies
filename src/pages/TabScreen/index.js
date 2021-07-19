import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { connect } from 'react-redux';
import colors from '../../styles/colors';

//Importação das páginas 
import HomeScreen from '../HomeScreen';
import MovieScreen from '../MovieScreen';
import SerieScreen from '../SerieScreen';
import SharedScreen from '../SharedScreen';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

function index({ theme }){
    return (
        <>
            <StatusBar barStyle={theme.statusBarStyle} backgroundColor={theme.statusBarColor}/>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    style: {
                        backgroundColor: colors.darkDracula,
                        elevation: 10,
                        borderTopColor: colors.black
                    },
                    inactiveBackgroundColor: true,
                    activeTintColor: colors.white,
                    inactiveTintColor: colors.white25,
                }}
                
            >
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen} 
                    options={{
                        title: 'Início',
                        // tabBarLabel: ({ focused }) => (<Text style={{ display: focused ? 'flex' : 'none', color: colors.white, fontSize: 12}}>Início</Text>),
                        tabBarIcon: ({ focused }) => (
                            <View style={focused ? styles.circle : {}}>
                                <MaterialCommunityIcons 
                                    name={focused ? 'play' : 'play-outline'} 
                                    color={focused ? colors.purple : colors.lightPurple} 
                                    size={focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name='Movies' 
                    component={MovieScreen}
                    options={{
                        title: 'Filmes',
                        // tabBarLabel: ({ focused }) => (<Text style={{ display: focused ? 'flex' : 'none', color: colors.white, fontSize: 12}}>Filmes</Text>),
                        tabBarIcon: ({ focused }) => (
                            <View style={focused ? styles.circle : {}}>
                                <MaterialCommunityIcons 
                                    name={focused ? 'movie-open' : 'movie-outline'} 
                                    color={focused ? colors.purple : colors.lightPurple} 
                                    size={focused ? 26 : 23}/>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name='Series' 
                    component={SerieScreen}
                    options={{
                        title: 'Séries',
                        // tabBarLabel: ({ focused }) => (<Text style={{ display: focused ? 'flex' : 'none', color: colors.white, fontSize: 12}}>Séries</Text>),
                        tabBarIcon: ({ focused }) => (
                            <View style={focused ? styles.circle : {}}>
                                <MaterialCommunityIcons 
                                    name='movie-roll' 
                                    color={focused ? colors.purple : colors.lightPurple} 
                                    size={focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name='Shared' 
                    component={SharedScreen}
                    options={{
                        title: 'Indicados',
                        // tabBarLabel: ({ focused }) => (<Text style={{ display: focused ? 'flex' : 'none', color: colors.white, fontSize: 12}}>Indicados</Text>),
                        tabBarIcon: ({ focused }) => (
                            <View style={focused ? styles.circle : {}}>
                                <MaterialCommunityIcons 
                                    name={focused ? 'play-box-multiple' : 'play-box-multiple-outline'} 
                                    color={focused ? colors.purple : colors.lightPurple} 
                                    size={focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333842',
        borderRadius: 50,
        elevation: 4,
        top: -26,
    }
});

export default connect(state => ({
    theme: state.theme.theme
}))(index);