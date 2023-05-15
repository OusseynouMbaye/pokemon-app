<template>
  <div class="grid gap-6 justify-center m-16">
    <!-- <PokemonCard v-for="poke in pokes" :key="poke.id" :event="poke" /> -->
    <PokemonCard v-for="poke in pokes" :key="poke" :poke="poke" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PokemonCard from '@/components/PokemonCard.vue'

const pokes = ref([])

onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/OusseynouMbaye/pokemon-app/pokes')
    .then((res) => {
      // console.log(res.data)
      pokes.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<style scoped>
/* // create a grid with 3 columns and responsive */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

<!-- await axios
.get('https://pokeapi.co/api/v2/pokemon')
.then((res) => {
  pokes.value = res.data.results
})
.catch((err) => {
  console.log(err)
}) -->
