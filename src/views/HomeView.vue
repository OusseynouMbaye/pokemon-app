<template>
  <div class="grid gap-6 justify-center m-16">
    <!-- <PokemonCard v-for="poke in pokes" :key="poke.id" :event="poke" /> -->
    <PokemonCard v-for="poke in pokes" :key="poke.id" :poke="poke" />
  </div>
</template>

<script lang="ts" setup>
import PokemonCard from '@/components/PokemonCard.vue'
import { ref } from 'vue'

const pokes = ref([
  {
    id: 'eee',
    title: 'Bulbasaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
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
    types: ['grass', 'poison'],
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
    types: ['grass', 'poison'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      // 'special-attack': 100,
      // 'special-defense': 100,
      speed: 80,
    },
  },
  {
    id: 4,
    title: 'Charmander',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    types: ['fire'],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      // 'special-attack': 60,
      // 'special-defense': 50,
      speed: 65,
    },
  },
  {
    id: 5,
    title: 'Charmeleon',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    types: ['fire'],
    stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      // 'special-attack': 80,
      // 'special-defense': 65,
      speed: 80,
    },
  },
  {
    id: 6,
    title: 'Charizard',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    types: ['fire', 'flying'],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      // 'special-attack': 109,
      // 'special-defense': 85,
      speed: 100,
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
