import React, { useEffect, useState } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { Container } from './styles';

import Card from '../CardComponent';
import MessageBar from '../MessageBarComponent';

const { width, height } = Dimensions.get('window');

export default function index({ horizontal, emptyMessage, data, navigation, loading, page, setPage, type }) {

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
                ListHeaderComponent={() => (<ActivityIndicator size='large' color='#B39DDB'/>)}
                ListFooterComponent={() => <ActivityIndicator size='large' color='#B39DDB'/>}
                ListEmptyComponent={() => <MessageBar message={emptyMessage} style={{ display: loading ? 'none' : 'flex'}}/>}
                renderItem={ ({ item : movie }) => (
                    <Card key={movie.id} movie={movie} navigation={navigation} type={type}/>
                )}
                horizontal={width < 500 ? horizontal : null}
                showsHorizontalScrollIndicator={false}
                numColumns={width < 500 ? null : 2}
                scrollEnabled={true}
                // refreshing={}
                // onRefresh={}
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    width: '100%',
                }}
                ListHeaderComponentStyle={{
                    display: loading ? 'flex' : 'none',
                }}
                ListFooterComponentStyle={{
                    display: loading && data != '' ? 'flex' : 'none',
                    top: -50,
                }}
                columnWrapperStyle={width < 500 ? null : {
                    justifyContent: 'center'
                }}
                onEndReachedThreshold={0.2}
                onEndReached={() => setPage(page+1)}
            />
        </Container>
    )
}