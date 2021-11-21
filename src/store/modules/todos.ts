import { Todo } from '@models/todo';
import { ActionTree, MutationTree } from 'vuex';
import axios from '../../api/axios';

export interface TodosState {
  todos: Todo[];
}

const state: TodosState = {
  todos: [
    {
      id: 1,
      text: 'Learn Vue',
      done: false,
    },
    {
      id: 2,
      text: 'Learn React',
      done: false,
    },
    {
      id: 3,
      text: 'Learn Angular',
      done: false,
    },
  ],
};
const mutations: MutationTree<TodosState> = {
  setTodos(state, todos: Todo[]) {
    state.todos = todos;
  },
  addTodo(state, todo: Todo) {
    state.todos.push(todo);
  },
  removeTodo(state, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  toggleDone(state, todo: Todo) {
    const foundTodo = state.todos.find((t) => t.id === todo.id)!;
    foundTodo.done = !foundTodo.done;
  },
};

const actions: ActionTree<TodosState, TodosState> = {
  async getTodos({ commit }) {
    const response = await axios.get('/todos');
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, todo: Todo) {
    const response = await fetch('http://localhost:3004/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await response.json();
    commit('addTodo', newTodo);
  },
  async removeTodo({ commit }, todo: Todo) {
    await fetch(`http://localhost:3004/todos/${todo.id}`, {
      method: 'DELETE',
    });
    commit('removeTodo', todo);
  },
  async toggleDone({ commit }, todo: Todo) {
    await fetch(`http://localhost:3004/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !todo.done }),
    });
    commit('toggleDone', todo);
  },
};

export const todosStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};
