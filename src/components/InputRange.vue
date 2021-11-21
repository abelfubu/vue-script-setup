<script setup lang="ts">
  import { defineEmits, defineProps, withDefaults } from 'vue';

  interface Props {
    label: string;
    name: string;
    min?: string;
    max?: string;
    value?: string;
  }

  withDefaults(defineProps<Props>(), {
    min: '0',
    max: '360',
    value: '0',
  });

  const emit = defineEmits<{ (event: 'change', value: string): void }>();
</script>
<template>
  <label for="name">{{ label }}</label>
  <input
    @input="emit('change', ($event.target as HTMLInputElement).value)"
    type="range"
    :name="name"
    :id="name"
    :min="min"
    :max="max"
    :value="value"
  />
</template>

<style lang="scss" scoped>
  label {
    display: block;
    padding-bottom: var(--size-2);
  }
  input {
    width: 100%;
  }
</style>
