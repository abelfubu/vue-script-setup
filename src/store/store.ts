import { InjectionKey } from 'vue';
import { createStore, Store, useStore } from 'vuex';
import { TodosState, todosStore } from './modules/todos';

interface AppState {
  todos: TodosState;
}

export const key: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore({
  modules: {
    todos: todosStore,
  },
});

export function useTodoStore() {
  return useStore(key);
}
