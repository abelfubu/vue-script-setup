import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const resolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      '@models': resolve('src/models'),
      '@store': resolve('src/store'),
    },
  },
});
