import axios from 'axios'

const pokes: object[] = [] //= ref([])

const getPokes = async () => {
  await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then((res) => {
      console.log(res.data.results)
      let result: object[] = []
      result = res.data.results
      pokes.push(result)
      //   pokes  = res.data.results
    })
    .then(() => {
      pokes.forEach((poke: any) => {
        getPokemonData(poke)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
const getPokemonData = async (pokemon: any) => {
  await axios.get(pokemon.url).then((res) => {
    console.log(res.data)
  })
}
