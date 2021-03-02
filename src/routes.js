import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

//Importação das páginas 
import HomeScreen from './pages/HomeScreen';
import MovieScreen from './pages/MovieScreen';
import SerieScreen from './pages/SerieScreen';
import SharedScreen from './pages/SharedScreen';
import styled from 'styled-components';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                activeColor='#FFF'
                barStyle={{
                    backgroundColor: '#333842'
                }}            
            >
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen} 
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.circle}>
                                <MaterialCommunityIcons name={focused ? 'play' : 'play-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />

                <Tab.Screen 
                    name='Movies' 
                    component={MovieScreen}
                    options={{
                        title: 'Filmes',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.circle}>
                                <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26 : 23}/>
                            </View>
                        )
                    }}
                />

                <Tab.Screen 
                    name='Series' 
                    component={SerieScreen}
                    options={{
                        title: 'Séries',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.circle}>
                                <MaterialCommunityIcons name='movie-roll' color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />

                <Tab.Screen 
                    name='Shared' 
                    component={SerieScreen}
                    options={{
                        title: 'Indicados',
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.circle}>
                                <MaterialCommunityIcons name={ focused ? 'play-box-multiple' : 'play-box-multiple-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    circle: {
        // width: 50,
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 50,
        // backgroundColor: '#FFF',
        // elevation: 4,
        // top: -20
    },

    icon: {
        paddingHorizontal: 5,
    }
});