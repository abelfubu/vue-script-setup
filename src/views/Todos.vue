<script setup lang="ts">
  import { mapTodosActions } from '@store/modules/todos';
  import { useTodoStore } from '@store/store';
  import { computed, onMounted } from 'vue';
  import Todo from '../components/Todo.vue';

  const store = useTodoStore();
  const { getTodos, addTodo: addTodoAction } = mapTodosActions(store);

  onMounted(() => getTodos());

  const todos = computed(() => store.state.todos.todos);

  function addTodo(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const text = input.value;
    if (!text) return;
    addTodoAction({ text, done: false });
    input.select();
  }
</script>

<template>
  <h2 v-highlight.red>Todo list</h2>
  <input type="text" @keyup.enter="addTodo" />
  <ul>
    <Todo v-for="todo of todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<style lang="scss" scoped>
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
</style>
