<script setup lang="ts">
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
  main {
    padding: var(--size-6);
  }
</style>
