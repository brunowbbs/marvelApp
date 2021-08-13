import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { useHeroes } from '../../hooks/useHeroes';
import { ActivityIndicator } from 'react-native'


import * as S from './styles';

export function Details() {

  const [comics, setComics] = useState<Array<any>>([]);
  const [series, setSeries] = useState<Array<any>>([]);

  const route = useRoute();
  const { item }: any = route.params;
  const navigation = useNavigation();
  const { fetchComics, fetchSeries, isLoadingComics, isLoadingSeries } = useHeroes();

  useEffect(() => {
    getComics();
    getSeries();
  }, [])


  async function getComics() {
    const comicsData: any = await fetchComics(item.comics.items);
    setComics(comicsData);
  }

  async function getSeries() {
    const seriesData: any = await fetchSeries(item.series.items);
    setSeries(seriesData);

  }

  return (
    <S.Container>
      <S.GoBackButton onPress={() => navigation.goBack()}>
        <S.IconButton />
      </S.GoBackButton>
      <SharedElement id={`item.${item.id}.photo`}>
        <S.Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
          style={{ width: '100%', height: 400 }}
        />
      </SharedElement>
      <S.ContainerContent>
        <S.Title>{item.name}</S.Title>
        <S.Description>{item.description ? item.description : 'No description'}</S.Description>
      </S.ContainerContent>

      <S.TitleList>Comics</S.TitleList>
      {!isLoadingComics && comics.length === 0 && <S.TextEmpty>No Data</S.TextEmpty>}
      {isLoadingComics ? <ActivityIndicator color="#000" size="large" /> : (
        <S.DetailsList
          data={comics}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          ListFooterComponent={() => <S.SpaceFinal />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const auxItem = item.data.data?.results[0];
            return (
              <S.ContainerList>
                <S.ImageList
                  source={{ uri: `${auxItem?.images[0]?.path}.${auxItem?.images[0]?.extension}` }}
                />
                <S.TextList>{auxItem.title}</S.TextList>
              </S.ContainerList>
            )
          }}
        />
      )}

      <S.TitleList>Séries</S.TitleList>
      {!isLoadingSeries && series.length === 0 && <S.TextEmpty>No Data</S.TextEmpty>}
      {isLoadingSeries ? <ActivityIndicator color="#000" size="large" /> : (
        <S.DetailsList
          data={series}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          ListFooterComponent={() => <S.SpaceFinal />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            const auxItem = item.data.data?.results[0];
            return (
              <S.ContainerList>
                <S.ImageList
                  source={{ uri: `${auxItem?.thumbnail?.path}.${auxItem?.thumbnail?.extension}` }}
                />
                <S.TextList>{auxItem.title}</S.TextList>
              </S.ContainerList>
            )
          }}
        />
      )}

    </S.Container >
  )
}