import React, { useState } from 'react';
import * as S from './styles';
import { useHeroes } from '../../hooks/useHeroes';

export default function Pagination() {

  const [atualPage, setAtualPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [doubleNextPage, setDoubleNextPage] = useState(3);


  const { page, handlePage, totalElements } = useHeroes();

  const qtdPaginas = Math.ceil(totalElements / 10);

  function handleNext() {
    handlePage(atualPage + 3);
    setAtualPage(atualPage + 3);
    setNextPage(nextPage + 3);
    setDoubleNextPage(doubleNextPage + 3);
  }

  function handlePrevious() {
    handlePage(atualPage - 3);
    setAtualPage(atualPage - 3)
    setNextPage(nextPage - 3)
    setDoubleNextPage(doubleNextPage - 3)
  }

  return (
    <S.Container>
      <S.CustomIcon name="chevron-left" size={35} color="red" onPress={atualPage > 1 ? handlePrevious : () => { }} />
      <S.ContainerCircle>

        <S.Circle page={page} numberPage={atualPage} onPress={() => handlePage(atualPage)}>
          <S.Text page={page} numberPage={atualPage}>{atualPage}</S.Text>
        </S.Circle>

        {nextPage < qtdPaginas && (
          <S.Circle page={page} numberPage={nextPage} onPress={() => handlePage(nextPage)}>
            <S.Text page={page} numberPage={nextPage}>{nextPage}</S.Text>
          </S.Circle>
        )}

        {doubleNextPage < qtdPaginas && (
          <S.Circle page={page} numberPage={doubleNextPage} onPress={() => handlePage(doubleNextPage)}>
            <S.Text page={page} numberPage={doubleNextPage}>{doubleNextPage}</S.Text>
          </S.Circle>
        )}
      </S.ContainerCircle>
      <S.CustomIcon name="chevron-right" size={35} color="red" onPress={atualPage < qtdPaginas ? handleNext : () => { }} />
    </S.Container>
  )
}