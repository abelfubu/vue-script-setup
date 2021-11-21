import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../views/Todos.vue';
import { Paths } from '../constants/paths';

const routes = [
  {
    path: Paths.todos,
    name: 'Todos',
    component: Todos,
  },
  {
    path: Paths.perspective,
    name: 'Perspective',
    component: () => import('../views/Perspective.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
