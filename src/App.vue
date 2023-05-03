import { defineComponent } from "vue";

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
</script>

<style scoped></style>
