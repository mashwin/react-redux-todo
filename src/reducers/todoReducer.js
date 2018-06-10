import {
    GET_TODOS, DELETE_TODO,
    UPDATE_CURRENT_TODO_TEXT,
    ADD_TODO, TOGGLE_UPDATE_TODO_MODAL,
    UPDATE_CURRENT_TODO_ID,
    UPDATE_MODIFIED_TEXT,
    UPDATE_TODO
} from "../constants";

export function todoReducer(state = {
    todos: [{ id: 1, text: 'Go for walk' }, { id: 2, text: 'Get Milk' }, { id: 3, text: 'Have Breakfast' }],
    currentTodoText: '',
    showUpdateTodoModal: false,
    currentTodo: '',
    modifiedText: ''
}, action) {

    switch (action.type) {
        case GET_TODOS:

            return {
                ...state,
                todos: state.todos
            }

        case DELETE_TODO:

            let tempTodos = [];
            tempTodos = state.todos;
            tempTodos = tempTodos.filter((todo) => {
                return todo.id !== action.payload
            })

            return {
                ...state,
                todos: tempTodos
            }

        case UPDATE_CURRENT_TODO_TEXT:

            return {
                ...state,
                currentTodoText: action.payload
            }

        case ADD_TODO:

            return {
                ...state,
                todos: [...state.todos, { id: state.todos.length + 1, text: action.payload }]
            }

        case TOGGLE_UPDATE_TODO_MODAL:

            return {
                ...state,
                showUpdateTodoModal: !state.showUpdateTodoModal
            }

        case UPDATE_CURRENT_TODO_ID:

            return {
                ...state,
                currentTodo: action.payload
            }

        case UPDATE_MODIFIED_TEXT:

            return {
                ...state,
                modifiedText: action.payload
            }

        case UPDATE_TODO:

            let allTodos = [];
            allTodos = state.todos;
            const index = allTodos.findIndex(todo => {
                return todo.id === state.currentTodo.todo.id
            })

            allTodos[index] = { id: state.currentTodo.todo.id, text: state.modifiedText }

            return {
                ...state,
                todos: Object.assign(state.todos, allTodos)
            }

        default:
            return state;
    }
}