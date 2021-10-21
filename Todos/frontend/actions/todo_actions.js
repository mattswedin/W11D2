import fetchTodos from "../util/todo_api_util";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    };
};

export const removeTodo = (todo) => {
    return {
        type: DELETE_TODO,
        todo,
    }
}

window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const DELETE_TODO = "DELETE_TODO";
