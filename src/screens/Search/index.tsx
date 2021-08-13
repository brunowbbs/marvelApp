import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useHeroes } from '../../hooks/useHeroes';

export function Search() {
  const navigation = useNavigation();
  const { fetchHeroesFiltered, isLoadingHeroes } = useHeroes();

  const [heroeName, setHeroeName] = useState('');
  const [heroes, setHeroes] = useState<Array<any>>([]);

  async function getHeroesByName() {
    const heroesData: any = await fetchHeroesFiltered(heroeName);
    setHeroes(heroesData.results);
  }

  return (
    <S.ContainerSafe>
      <S.Container>
        <S.Header>
          <S.ContainerButton onPress={() => navigation.goBack()}>
            <S.IconButton />
          </S.ContainerButton>
          <S.TextHeader>Buscar Personagem</S.TextHeader>
          <S.TextHeader />
        </S.Header>
        <S.TextInput>Nome do Personagem</S.TextInput>
        <S.Input
          onChangeText={txt => setHeroeName(txt)}
          placeholder="Ex: Agatha Harkness"
        />

        <S.ContainerList>
          {isLoadingHeroes ? <ActivityIndicator color="#000" size="large" /> : (
            <S.PersonageList
              data={heroes}
              ItemSeparatorComponent={() => <S.Separator />} /* 
            ListFooterComponent={() => <S.Separator />} */
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <S.ContainerItemList
                  onPress={() => navigation.navigate('Details', { item })}>
                  <S.ImageList
                    source={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}
                  />
                  <S.TextList>{item.name}</S.TextList>
                </S.ContainerItemList>
              )}
            />
          )}
        </S.ContainerList>

        <S.Button onPress={getHeroesByName}>
          <S.TextButton>Pesquisar</S.TextButton>
        </S.Button>
      </S.Container>
    </S.ContainerSafe>
  );
}
