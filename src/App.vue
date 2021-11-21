<script setup lang="ts">
import Todo from './components/Todo.vue';
</script>

<template>
  <h1>Hello World</h1>
  <img alt="Vue logo" src="./assets/logo.png" />
  <component :is="Todo" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
