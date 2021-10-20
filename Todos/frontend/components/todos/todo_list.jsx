import React from "react";
import { TodoListItem } from "./todo_list_item";
import TodoForm from "./todo_form";

export const TodoList = (props) =>{ 
    
    return(
        <div>
            <h1>Todo List</h1>

            <ul>
                {
                    props.todos.map(todo => 
                        <TodoListItem key={todo.id} todo={todo}/>
                    )
                }
            </ul>
            <div>
                <TodoForm />
            </div>
        </div>
    )
}