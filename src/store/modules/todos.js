import axios from 'axios'

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },
    async addTodo({commit}, title) {
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos',{title,completed:false});
        commit('newTodo', response.data)
    },
    async deleteTodo({commit}, id) {
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`, id);
        commit('removeTodo', id)
    },
    async filterTodos({commit}, e) {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${e.target.value}`);
        commit('selectTodo', response.data);
    },
    async updateTodo({commit}, updTodo) {
        const response = await axios.put(`http://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        console.log(response.data);
        commit('updateTodo', response.data);
    }
};
const mutations = {
    setTodos: (state, todos) => {state.todos = todos},
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos.filter(todo => todo.id !== id),
    selectTodo: (state, todos) => {state.todos = todos},
    updateTodo: (state, updTodo) => {
        let index = state.todos.findIndex(todo=>todo.id===updTodo.id);
        if(index != -1) {
            state.todos.splice(index,1,updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}