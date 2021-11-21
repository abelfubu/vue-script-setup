<script setup lang="ts">
  import { onMounted } from 'vue';
  import { key } from '@store/store';
  import { useStore } from 'vuex';

  const store = useStore(key);

  onMounted(() => {
    store.dispatch('todos/getTodos');
  });

  function addTodo(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const text = input.value;
    if (!text) return;
    store.dispatch('todos/addTodo', { text, done: false });
    input.select();
  }
</script>

<template>
  <h2 v-highlight.red>Todo list</h2>
  <input type="text" @keyup.enter="addTodo" />
  <ul>
    <li
      v-for="todo in store.state.todos.todos"
      @click="store.dispatch('todos/toggleDone', todo)"
      :key="todo.text"
    >
      <span v-dynamic-class.line-through="todo.done">{{ todo.text }}</span>
      <button @click.stop="store.dispatch('todos/removeTodo', todo)">🗑️</button>
    </li>
  </ul>
</template>

<style lang="scss">
  input {
    font-size: 1.2em;
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 0.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
    max-width: 25rem;
    margin: auto;
    padding-top: 4rem;
  }

  li {
    max-width: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  button {
    border: none;
    padding: 0.3rem;
    border-radius: 0.25rem;
    background: #74984330;
    cursor: pointer;
  }

  button:hover {
    background: #74984350;
  }

  .line-through {
    text-decoration: line-through;
  }
</style>
