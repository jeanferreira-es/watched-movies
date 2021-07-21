import React, { useEffect, useState } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Box, Container } from './styles';
import { Text } from '../../styles/general';
import metrics from '../../styles/metrics';
import { connect } from 'react-redux';
import ImageColors from 'react-native-image-colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getLight from '../../utils/getLight';

function index({ movie, theme, navigation, type }) {
    const [genres, setGenres] = useState([]);
    // const [color, setColor] = useState({});
    const [textColor, setTextColor] = useState('');
    const [barStyle, setBarStyle] = useState('');
    const imgURL = 'https://image.tmdb.org/t/p/w220_and_h330_face/'+movie.poster_path;

    useEffect(() => {
        getColors();
        checkGenre();
    },[]);

    async function getColors(){
        const colors = await ImageColors.getColors(imgURL,{
            fallback: '#999',
            cache: false,
            key: 1
        });

        const textColor = await (getLight(colors.average) >= 127.5 ? (getLight(colors.darkMuted) >= 127.5 ? '#444' : colors.darkMuted) : (getLight(colors.lightMuted) < 127.5 ? '#FFF' : colors.lightMuted));
        
        const barStyle = getLight(colors.average) >= 127.5 ? 'dark-content' : 'light-content';
        
        setTextColor(textColor);
        setBarStyle(barStyle);
        // setColor(colors);
    }

    async function checkGenre(){
        const all = JSON.parse(await AsyncStorage.getItem('@genres_'+type));
        const movieGenres = movie.genre_ids;
        let i = 0;

        let res = await all.filter((item) => {               
            if(item.id === movieGenres[i]){
                i++;
                return item;
            }
            
        });
    
        setGenres(res);
    }

    return(
        <TouchableWithoutFeedback onPress={() => navigation.push('Details', { movie, type, genres, textColor, barStyle})}>
            <Container style={{ backgroundColor: theme.backgroundColor }}>
                <Box capa>
                    <Image 
                        source={{ uri: 'https://image.tmdb.org/t/p/w220_and_h330_face/'+movie.poster_path}} resizeMode='contain'
                        resizeMethod='auto'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderBottomLeftRadius: metrics.baseRadius-3,
                            borderTopLeftRadius: metrics.baseRadius-3
                        }}
                    />
                </Box>
                <Box details>
                    <Text bold numberOfLines={2} style={{ color: theme.textColor }}>{type == 'movie' ? movie.title : movie.name}</Text>
                    <Text numberOfLines={1}>
                        {genres.map((item, index) => {
                            if(index == genres.length-1){
                                return(
                                    <Text small style={{ color: theme.textColor }}>{item.name}.</Text>
                                )
                            } else {
                                return(
                                    <Text small style={{ color: theme.textColor }}>{item.name}, </Text>
                                )
                            }
                        })
                        }
                    </Text>
                    <Text mTop numberOfLines={5} style={{ color: theme.textColor }}>{String(movie.overview).length ? movie.overview : "A descrição não está disponível."}</Text>
                </Box>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default connect(state => ({
    theme: state.theme.theme
}))(index);