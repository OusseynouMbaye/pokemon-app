<template>
  <div v-if="poke" class="pokemon-details">
    <h2>{{ poke.title }}</h2>
    <p>{{ poke.ability_1 }}</p>
    <p>{{ poke.type }}</p>
  </div>
</template>

<script lang="ts" setup>
import PokemonService from '@/services/PokemonService.js'
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: Number || String,
    required: true,
  },
})

const poke = ref()
// const id = ref(1) //$route.params.id

// fetch data from the API and set the poke ref
onMounted(() => {
  PokemonService.getPokemon(props.id)
    .then((res) => {
      // console.log(res.data)
      poke.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
