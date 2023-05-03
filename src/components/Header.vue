<template>
  <div class="header_content">
    <nav class="relative container mx-auto bg-red-500">
      <div class="flex items-center justify-between">
        <!-- logo -->
        <h1 class="text-3xl font-bold text-white">Logo</h1>

        <div class="hidden md:flex space-x-6">
          <h2 class="hover:text-darkGrayishBlue">
            <router-link to="/">Home Page</router-link>
          </h2>
          <h2 class="hover:text-darkGrayishBlue">
            <router-link to="/about">About Page</router-link>
          </h2>
        </div>

        <div>
          <h3>connect Button</h3>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.header_content {
  /* display: flex;
    justify-content: center;
    gap: 15px; */
}
</style>
