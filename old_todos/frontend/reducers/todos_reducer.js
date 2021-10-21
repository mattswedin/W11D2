import { RECEIVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";
import { DELETE_TODO } from "../actions/todo_actions";

const initialState = {1: {
    id: 1,
    title: 'take a shower',
    body: 'and be clean',
    done: false
        }}


const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: "Turkey" }];
window.newTodos = newTodos

export const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo
            return nextState;

        case RECEIVE_TODOS:
            nextState = {};
            action.todos.forEach(function(todo){
                nextState[todo.id] = todo
            })
            return nextState;

        case DELETE_TODO:
            nextState = {}
            Object.values(state).forEach(function(todo){
                if(todo.id !== action.todo.id){
                    nextState[todo.id] = todo
                }
            })
            return nextState;
    
        default:
            return state;
    };
};