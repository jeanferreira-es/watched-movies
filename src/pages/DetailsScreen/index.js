import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { Text, Box } from '../../styles/general';
import { Container } from './styles';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

function index({ theme, navigation, route }){
    const [data, setData] = useState(route.params.movie);
    const [color, setColor] = useState('#FFF');
    const genres = route.params.genres;
    
    useEffect(() => {
        console.log(route.params.movie);

        setColor(route.params.textColor)

        navigation.setOptions({
            title: route.params.type == 'movie' ? data.title : data.name,
            headerTintColor: route.params.barStyle == 'dark-content' ? '#000' : '#FFF',
            headerTitleStyle: {
                color: route.params.textColor,
                fontWeight: 'bold'
            }
        });
    },[]);

    return(
        <ImageBackground 
            source={{uri: 'https://image.tmdb.org/t/p/w220_and_h330_face/'+data.poster_path}} 
            resizeMode='cover'
            blurRadius={4}        
            style={{ 
                flex: 1, 
                justifyContent: 'center',
            }}
        >
            <Container>
                <Text style={{ color: color }}>
                    <Text bold>Título original: </Text>
                    {route.params.type == 'movie' ? data.original_title : data.original_name}
                </Text>

                <Box row>
                    <Box spaceAround style={{ height: 240 }}>
                        <Text style={{ color: color }}>
                            <Text bold>Ano: </Text>
                            {route.params.type == 'movie' ? data.release_date : data.first_air_date}
                        </Text>

                        <Text style={{ color: color }}>
                            <Text bold>Gênero: </Text>
                            <Text>
                                {genres.map((item, index) => {
                                    if(index == genres.length-1){
                                        return(
                                            <Text style={{ color: color }}>{item.name}.</Text>
                                            )
                                        } else {
                                            return(
                                                <Text style={{ color: color }}>{item.name}, </Text>
                                                )
                                            }
                                        })
                                    }
                            </Text>
                        </Text>

                        <Text style={{ color: color }}>
                            <Text bold>Duração: </Text>
                            {}
                        </Text>

                        <Text style={{ color: color }}>
                            <Text bold>Popularidade: </Text>
                            {data.popularity}%
                        </Text>

                        <Text style={{ color: color }}>
                            <Text bold>Pontuação: </Text>
                            {data.vote_average}
                        </Text>

                    </Box>

                    <Box style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingLeft: 40,
                        paddingVertical: 15
                    }}>
                        <Image source={{ uri: 'https://image.tmdb.org/t/p/w220_and_h330_face/'+data.poster_path}}   
                            resizeMode='cover'
                            width={width/2}
                            height={100}
                            style={{
                                width: "100%",
                                height: 240,
                                borderRadius: 4
                            }}
                        />
                    </Box>
                </Box>
                
                <Text style={{ color: color }}>
                    <Text bold>Resumo: </Text>
                    {data.overview}
                </Text>

                <Text style={{ color: color }}>Detalhes</Text>

                <Text style={{ color: color }}>
                    <Text bold>Data de lançamento: </Text>
                    {data.release_date}
                </Text>

                <Text style={{ color: color }}>
                    <Text bold>Diretor: </Text>
                    {}
                </Text>

                <Text style={{ color: color }}>
                    <Text bold>Roteiro: </Text>
                    {}
                </Text>

                <Text style={{ color: color }}>
                    <Text bold>Cinematografia: </Text>
                    {}
                </Text>

                <Text style={{ color: color }}>
                    <Text bold>Indicações: </Text>
                    {}
                </Text>

            </Container>
            <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0)' barStyle={route.params.barStyle}/>
        </ImageBackground>
    )
}

export default connect( state => ({
    theme: state.theme.theme
}))(index);