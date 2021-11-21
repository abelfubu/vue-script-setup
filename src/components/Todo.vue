<script setup lang="ts">
  import { Todo } from '@models/todo';
  import { mapTodosActions } from '@store/modules/todos';
  import { useTodoStore } from '@store/store';

  const store = useTodoStore();
  const { removeTodo, toggleDone } = mapTodosActions(store);

  defineProps<{ todo: Todo }>();
</script>

<template>
  <li @click="toggleDone(todo)">
    <span v-dynamic-class.line-through="todo.done">{{ todo.text }}</span>
    <button @click.stop="removeTodo(todo)">🗑️</button>
  </li>
</template>

<style lang="scss">
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
