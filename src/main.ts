import { createApp } from 'vue';
import App from './App.vue';
import { dynamicClassDirective } from './directives/dynamic-class';
import { highlight } from './directives/highlight';
import { key, store } from './store/store';

const app = createApp(App);
app.directive('highlight', highlight);
app.directive('dynamic-class', dynamicClassDirective);
app.use(store, key);
app.mount('#app');
