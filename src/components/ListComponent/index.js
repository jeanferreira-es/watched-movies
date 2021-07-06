import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import { Container } from './styles';

import Card from '../CardComponent';
import MessageBar from '../MessageBarComponent';

const { width, height } = Dimensions.get('window');

export default function index({ horizontal, emptyMessage, data, navigation }) {
    // const data = [{
    //     adult: false,
    //     backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    //     genre_ids: [
    //         28,
    //         35,
    //         10751,
    //         16,
    //         12
    //     ],
    //     id: 58783207,
    //     original_language: "en",
    //     original_title: "Tom & Jerry",
    //     overview: "Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento.",
    //     popularity: 4502.599,
    //     poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    //     release_date: "2021-02-11",
    //     title: "Tom & Jerry - O Filme",
    //     video: false,
    //     vote_average: 7.9,
    //     vote_count: 606
    // },
    // {
    //     adult: false,
    //     backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    //     genre_ids: [
    //         28,
    //         35,
    //         10751,
    //         16,
    //         12
    //     ],
    //     id: 58754807,
    //     original_language: "en",
    //     original_title: "Tom & Jerry",
    //     overview: "Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento.",
    //     popularity: 4502.599,
    //     poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    //     release_date: "2021-02-11",
    //     title: "Tom & Jerry - O Filme",
    //     video: false,
    //     vote_average: 7.9,
    //     vote_count: 606
    // },
    // {
    //     adult: false,
    //     backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    //     genre_ids: [
    //         28,
    //         35,
    //         10751,
    //         16,
    //         12
    //     ],
    //     id: 53487807,
    //     original_language: "en",
    //     original_title: "Tom & Jerry",
    //     overview: "Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento.",
    //     popularity: 4502.599,
    //     poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    //     release_date: "2021-02-11",
    //     title: "Tom & Jerry - O Filme",
    //     video: false,
    //     vote_average: 7.9,
    //     vote_count: 606
    // }]

    // const data = [];

    return (
        <Container>
            <FlatList
                data={data}
                keyExtractor={movie => String(movie.id)}
                ListEmptyComponent={() => <MessageBar message={emptyMessage} />}
                ListHeaderComponent={() => (<></>)}
                renderItem={ ({ item : movie }) => (
                    <Card movie={movie} navigation={navigation}/>
                )}
                numColumns={width < 500 ? null : 2}
                horizontal={width < 500 ? horizontal : null}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                // refreshing={}
                // onRefresh={}
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    width: '100%',
                }}
                columnWrapperStyle={width < 500 ? null : {
                    justifyContent: 'center'
                }}
            />
        </Container>
    )
}