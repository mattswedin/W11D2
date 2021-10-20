import React from "react";
import { TodoListItem } from "./todo_list_item";
import TodoFormContainer from "./todo_form_container";


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
                <TodoFormContainer />
            </div>
        </div>
    )
}