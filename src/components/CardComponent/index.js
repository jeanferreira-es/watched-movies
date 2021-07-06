import React, { useEffect, useState } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Box, Container } from './styles';
import { Text } from '../../styles/general';
import metrics from '../../styles/metrics';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function index({ movie, theme, navigation }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        console.log(movie);
        checkGenre();
    },[]);

    async function checkGenre(){
        const all = JSON.parse(await AsyncStorage.getItem('@genres_key'));
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
        <TouchableWithoutFeedback onPress={() => navigation.push('Details')}>
            <Container style={{ backgroundColor: theme.cardColor}}>
                <Box capa>
                    <Image 
                        source={{ uri: 'https://image.tmdb.org/t/p/w220_and_h330_face/'+movie.poster_path}} resizeMode='contain'
                        resizeMethod='auto'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderBottomLeftRadius: metrics.baseRadius,
                            borderTopLeftRadius: metrics.baseRadius
                        }}
                    />
                </Box>
                <Box details>
                    <Text bold style={{ color: theme.textColor }}>{movie.title}</Text>
                    <Text>
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
                    <Text mTop numberOfLines={5} style={{ color: theme.textColor }}>{String(movie.overview).length ? movie.overview : "A descrição deste filme não está disponível."}</Text>
                </Box>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default connect(state => ({
    theme: state.theme.theme
}))(index);