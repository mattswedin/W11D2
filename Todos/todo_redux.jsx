import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore}  from './frontend/store/store'
import {receiveTodos} from './frontend/actions/todo_actions'
import {receiveTodo} from './frontend/actions/todo_actions'
import {Root} from './frontend/components/root'
import {allTodos} from './frontend/reducers/selectors'



document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root')
    const store = configureStore()
    ReactDOM.render(<Root store={store} />, root)
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos(store.getState());
})