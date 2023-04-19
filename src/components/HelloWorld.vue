<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

// export default defineComponent({
//   name: 'HelloWorld',
//   // props: {
//   //   msg: {
//   //     type: String,
//   //     default: 'Hello World',
//   //   },
//   // },
// })

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
.card {
  /* width: 200px;
  height: 200px;
  background-color: #eee; */
}
</style>
