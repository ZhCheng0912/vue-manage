<template>
    <div>
        <add-todo></add-todo>
        <FilterTodos></FilterTodos>
        <h3>todos</h3>
        <div class="todos">
            <div @dblclick="onDblClick(todo)" v-for='todo in allTodos' :key='todo.id' class="todo"
             v-bind:class="{'is-complete':todo.completed}">
                {{ todo.title }}
                <span @click="deleteTodo(todo.id)" class='delete'>delete</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';
import AddTodo from './AddTodo'
import FilterTodos from './FilterTodo'
export default {
    name:"todos",
    components: {
        AddTodo,
        FilterTodos
    },
    methods: {
        ...mapActions(['fetchTodos','deleteTodo', 'updateTodo']),
        onDblClick(todo) {
            let updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo);
        }

    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos();
    }
}
</script>
<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

    .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer; 
    }
    .delete {
        float: right;
    }
    .delete:hover{
        color: #000;
    }
    .is-complete {
        background: #ec9410
    }
    
</style>