import React from "react";
import { removeTodo } from "../../actions/todo_actions";

export const TodoListItem = (props) => {
    return(
        <li>{props.todo.title}</li>,
        <button onClick={props.removeTodo}>DELETE TODO</button>
    )
} 