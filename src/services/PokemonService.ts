import axios from 'axios'

const API_URL = 'https://my-json-server.typicode.com/OusseynouMbaye/pokemon-app'
//  i supposed to use this api but for good stuff i used a fake api form jsonplaceholder
//'https://pokebuildapi.fr/api/v1/pokemon' when i use the api

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPokemons() {
    return apiClient.get('/pokes') // /limit/10 when i use the api
  },
  getPokemon(id: number) {
    return apiClient.get('/pokes/' + id) // use this when i use the api /' + id
  },
}
