import React from 'react';
import { ActivityIndicator } from 'react-native';

import Pagination from '../../components/Pagination';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles'
import { useHeroes } from '../../hooks/useHeroes';


export function Home() {
  const { heroes, isLoadingHeroes } = useHeroes();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.ContainerRow>
          <S.DivSpan>
            <S.SpanTitleUnderline>BUSCA</S.SpanTitleUnderline>
          </S.DivSpan>
          <S.SpanTitle>MARVEL</S.SpanTitle>
          <S.Title>TESTE FRONT-END</S.Title>
        </S.ContainerRow>
        <S.TextInput>Nome do Personagem</S.TextInput>
        <S.Input caretHidden={true} placeholder="Ex: Agatha Harkness" onPressIn={() => navigation.navigate('Search')} />
      </S.Header>
      <S.HeaderTable>
        <S.TitleHeaderTable>Nome</S.TitleHeaderTable>
      </S.HeaderTable>
      {isLoadingHeroes ? <S.ContainerLoading><ActivityIndicator color="#000" size="large" /></S.ContainerLoading> : (
        <S.PersonageList
          data={heroes}
          ItemSeparatorComponent={() => <S.Separator />}
          ListFooterComponent={() => <S.Separator />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <S.ContainerItemList onPress={() => navigation.navigate('Details', { item })}>
              <S.ImageList
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
              />
              <S.TextList>{item.name}</S.TextList>
            </S.ContainerItemList>
          )}
        />
      )}
      <Pagination />
    </S.Container>
  )
}