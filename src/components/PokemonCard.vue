<template>
  <div class="poke-card">
    <div>
      <img :src="poke.image" alt="poke.title" />
      <h2>{{ poke.title }}</h2>
      <div class="poke-stats">
        <!-- <div v-for="type in poke.type" :key="type">
        <span>{{ type }}</span>
            </div> -->

        <div v-for="(value, key) in poke.stats" :key="key">
          <div class="flex flex-col">
            <span>{{ key }}: </span>
            <span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  poke: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="css" scoped>
.poke-card {
  padding: 20px;
  width: 100%;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 10px;
  /* margin-bottom: 18px; */
}
.poke-card:hover {
  transform: scaleX(1.1) scaleY(1.1);
  box-shadow: 0px 8px 47px 0px rgba(0, 0, 0, 0.07);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  transition: all 0.2s ease-in-out;
}
.poke-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* create a grid with 3 columns and responsive */
.poke-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10px;
}
</style>
