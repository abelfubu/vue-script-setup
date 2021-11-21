import { Todo } from '@models/todo';
import { AppState } from '@store/store';
import { ActionTree, MutationTree, Store } from 'vuex';
import axios from '../../api/axios';
import { Todos } from './todos-model';

export interface TodosState {
  todos: Todo[];
}

const state: TodosState = {
  todos: [],
};

const mutations: MutationTree<TodosState> = {
  [Todos.setTodos](state, todos: Todo[]) {
    state.todos = todos;
  },
  [Todos.addTodo](state, todo: Todo) {
    state.todos.push(todo);
  },
  [Todos.removeTodo](state, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  [Todos.toggleTodo](state, todo: Todo) {
    const foundTodo = state.todos.find((t) => t.id === todo.id)!;
    foundTodo.done = !foundTodo.done;
  },
};

const actions: ActionTree<TodosState, TodosState> = {
  async [Todos.setTodos]({ commit }) {
    const response = await axios.get(Todos.path);
    commit(Todos.setTodos, response.data);
  },
  async [Todos.addTodo]({ commit }, todo: Todo) {
    const response = await axios.post(Todos.path, todo);
    commit(Todos.addTodo, response.data);
  },
  async [Todos.removeTodo]({ commit }, todo: Todo) {
    await axios.delete(`/${Todos.path}/${todo.id}`);
    commit(Todos.removeTodo, todo);
  },
  async [Todos.toggleTodo]({ commit }, todo: Todo) {
    await axios.patch(`/${Todos.path}/${todo.id}`, { done: !todo.done });
    commit(Todos.toggleTodo, todo);
  },
};

export const mapTodosActions = (store: Store<AppState>) => ({
  getTodos: () => store.dispatch(`${Todos.path}/${Todos.setTodos}`),
  addTodo: (todo: Omit<Todo, 'id'>) => store.dispatch(`${Todos.path}/${Todos.addTodo}`, todo),
  removeTodo: (todo: Todo) => store.dispatch(`${Todos.path}/${Todos.removeTodo}`, todo),
  toggleDone: (todo: Todo) => store.dispatch(`${Todos.path}/${Todos.toggleTodo}`, todo),
});

export const todosStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};
