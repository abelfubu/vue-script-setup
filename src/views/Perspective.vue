<script setup lang="ts">
  import { computed, ref } from 'vue';
  import InputRange from '../components/InputRange.vue';

  const styles = ref({
    rotatex: '0',
    rotatey: '0',
    rotate: '0',
  });

  const transform = computed(() => ({
    transform: `rotateX(${styles.value.rotatex}deg) rotateY(${styles.value.rotatey}deg) rotate(${styles.value.rotate}deg)`,
  }));
</script>

<template>
  <div>
    <h1>Perspective</h1>
    <div class="grid">
      <div class="square" :style="transform"></div>
      <div class="controls">
        <InputRange label="Rotate" name="rotate" @change="styles.rotate = $event" />
        <InputRange label="Rotate X" name="rotatex" @change="styles.rotatex = $event" />
        <InputRange label="Rotate Y" name="rotatey" @change="styles.rotatey = $event" />
        <pre>{{
          `selector {
  tranform: ${transform.transform};
}`
        }}</pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    gap: var(--size-12);
  }

  .square {
    background-color: var(--color-primary);
    margin: var(--size-28);
    width: 50%;
    aspect-ratio: 4 / 4;
  }

  .controls {
    margin: var(--size-28);
  }

  .controls > v-deep::input {
    margin-bottom: var(--size-24);
  }

  pre {
    margin-top: var(--size-12);
  }
</style>
