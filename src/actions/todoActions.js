import {
    GET_TODOS, DELETE_TODO,
    UPDATE_CURRENT_TODO_TEXT, ADD_TODO,
    TOGGLE_UPDATE_TODO_MODAL, UPDATE_CURRENT_TODO_ID,
    UPDATE_MODIFIED_TEXT, UPDATE_TODO
} from "../constants";

export function getTodos(dispatch) {
    return function (dispatch) {
        dispatch({
            'type': GET_TODOS,
            'payload': ''
        })
    }
}

export function deleteTodo(todoId) {
    return function (dispatch) {
        dispatch({
            'type': DELETE_TODO,
            'payload': todoId
        })
    }
}

export function updateCurrentTodoText(text) {
    return function (dispatch) {
        dispatch({
            'type': UPDATE_CURRENT_TODO_TEXT,
            'payload': text
        })
    }
}

export function addTodo(text) {
    return function (dispatch) {
        dispatch({
            'type': ADD_TODO,
            'payload': text
        })
    }
}

export function toggleTodoModal(dispatch) {
    return function (dispatch) {
        dispatch({
            'type': TOGGLE_UPDATE_TODO_MODAL,
            'payload': ''
        })
    }
}

export function updateCurrentTodoId(objTodo) {
    return function (dispatch) {
        dispatch({
            'type': UPDATE_CURRENT_TODO_ID,
            'payload': objTodo
        })
    }
}

export function updateModifiedText(modifiedText) {
    return function (dispatch) {
        dispatch({
            'type': UPDATE_MODIFIED_TEXT,
            'payload': modifiedText
        })
    }
}

export function updateTodo(dispatch) {
    return function (dispatch) {
        dispatch({
            'type': UPDATE_TODO,
            'payload': ''
        })
    }
}