<template>
  <div class="grid gap-5 justify-center m-16">
    <!-- <PokemonCard v-for="poke in pokes" :key="poke.id" :event="poke" /> -->
    <PokemonCard v-for="poke in pokes" :key="poke.id" :poke="poke" />
  </div>
</template>

<script lang="ts" setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { ref } from 'vue'

const pokes = ref([
  {
    id: 1,
    title: 'Bulbasaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    type: ['grass', 'poison'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      // 'special-attack': 65,
      // 'special-defense': 65,
      speed: 45,
    },
  },
  {
    id: 2,
    title: 'Ivysaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    type: ['grass', 'poison'],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      // 'special-attack': 80,
      // 'special-defense': 80,
      speed: 60,
    },
  },
  {
    id: 3,
    title: 'Venusaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    type: ['grass', 'poison'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      // 'special-attack': 100,
      // 'special-defense': 100,
      speed: 80,
    },
  },
])
</script>

<style scoped>
/* // create a grid with 3 columns and responsive */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
