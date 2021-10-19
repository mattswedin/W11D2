import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore}  from './frontend/store/store'
import {receiveTodos} from './frontend/actions/todo_actions'
import {receiveTodo} from './frontend/actions/todo_actions'

function Root(){
    return(
        <h1>TODOS APP</h1>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('.root')
    ReactDOM.render(<Root />, root)
    const store = configureStore()
    window.store = store;
    window.receiveTodo = receiveTodo;
})