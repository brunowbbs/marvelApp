import React from 'react';
import { ReactNode, useContext } from 'react';
import { createContext, useEffect, useState } from 'react';

import { fetchHeroes, fetchAllComics, fetchAllSeries, fetchHeroesByName } from '../services';

interface HeroesProviderProps {
  children: ReactNode;
}

interface HeroesContextData {
  heroes: any;
  fetchComics: (list: Array<any>) => void;
  fetchSeries: (list: Array<any>) => void;
  fetchHeroesFiltered: (name: string) => void;
  isLoadingHeroes: boolean;
  isLoadingComics: boolean;
  isLoadingSeries: boolean;
  page: number;
  handlePage: (value: number) => void;
  totalElements: number;
}

const HeroesContext = createContext<HeroesContextData>(
  {} as HeroesContextData
);

export function HeroesProvider({ children }: HeroesProviderProps) {
  const [heroes, setHeroes] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoadingHeroes, setIsLoadingHeroes] = useState(true);
  const [isLoadingComics, setIsLoadingComics] = useState(true);
  const [isLoadingSeries, setIsLoadingSeries] = useState(true);

  function handlePage(value: number) {
    setPage(value)
  }

  async function fetchComics(list: Array<any>) {
    setIsLoadingComics(true);
    const res: any = await fetchAllComics(list);
    setIsLoadingComics(false);
    return res;
  }

  async function fetchSeries(list: Array<any>) {
    setIsLoadingSeries(true);
    const res: any = await fetchAllSeries(list);
    setIsLoadingSeries(false);
    return res;
  }

  async function fetchHeroesFiltered(name: string) {
    setIsLoadingHeroes(true);
    const res: any = await fetchHeroesByName(name);
    setIsLoadingHeroes(false);
    return res;
  }

  useEffect(() => {
    async function getHeroes() {
      setIsLoadingHeroes(true);
      const res = await fetchHeroes(page);
      setIsLoadingHeroes(false);
      setHeroes(res.results);
      setTotalElements(res.total)
    }
    getHeroes();
  }, [page])

  return (
    <HeroesContext.Provider value={
      {
        heroes,
        fetchComics,
        fetchSeries,
        fetchHeroesFiltered,
        isLoadingComics,
        isLoadingHeroes,
        isLoadingSeries,
        page,
        handlePage,
        totalElements
      }
    }>
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroes() {
  return useContext(HeroesContext);
}