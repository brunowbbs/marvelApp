import axios from 'axios';
import md5 from 'md5';

interface FetchProps {
  count: number;
  limit: number;
  offset: number;
  results: [{}];
  total: number;
}

interface ListProps {
  name: string;
  resourceURI: string;
}

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

const publicKey = 'a3ba9f1c89042f991960f3294efd0c2c';
const privateKey = '80d0df2b8cec013908b8a5aa12219225672fca83';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.apikey = publicKey;
  config.params.hash = hash;
  config.params.ts = timestamp;
  return config;
});

async function fetchHeroes(page: number) {
  const { data } = await api.get(`/characters?offset=${(page - 1) * 10}&limit=10`);
  const heroes: FetchProps = data.data;
  return heroes
}

async function fetchHeroesByName(name: string) {
  const { data } = await api.get(`/characters`, {
    params: {
      nameStartsWith: name
    }
  });
  const heroes: FetchProps = data.data;
  return heroes
}

async function fetchAllComics(list: Array<ListProps>) {
  const promisesFetch = list.map(async function (heroe) {
    return await api.get(heroe.resourceURI);
  })
  return Promise.all(promisesFetch);
}

async function fetchAllSeries(list: Array<ListProps>) {
  const promisesFetch = list.map(async function (heroe) {
    return await api.get(heroe.resourceURI);
  })
  return Promise.all(promisesFetch);
}

export { api, fetchHeroes, fetchAllComics, fetchAllSeries, fetchHeroesByName };