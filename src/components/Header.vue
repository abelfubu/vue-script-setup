<script setup lang="ts">
  import { Paths } from '../constants/paths';
</script>

<template>
  <header>
    <nav>
      <h3>🥸</h3>
      <ul>
        <router-link :to="Paths.todos">Todos</router-link>
        <router-link :to="Paths.perspective">Perspective</router-link>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background-color: var(--color-primary);
    height: var(--size-16);
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: var(--scale-4);
    color: var(--color-white);
  }

  nav {
    padding: var(--size-4);
    width: 100vw;
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul > * {
    margin: 0 var(--size-4);
  }

  a {
    color: var(--color-white);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }
</style>
