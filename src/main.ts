import { createApp } from 'vue';
import App from './App.vue';
import { dynamicClassDirective } from './directives/dynamic-class';
import { highlight } from './directives/highlight';
import { router } from './router';
import { key, store } from './store/store';

import 'pollen-css';
import './theme/index.scss';

const app = createApp(App);
app.directive('highlight', highlight);
app.directive('dynamic-class', dynamicClassDirective);
app.use(store, key);
app.use(router);
app.mount('#app');
