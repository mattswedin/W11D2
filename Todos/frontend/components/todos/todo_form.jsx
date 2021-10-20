import React, { Component } from "react";
import uniqueId from "./todos_util";


export default class TodoForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    updateTitle(event){
        this.setState({
            title: event.target.value
        })
        
    }

    updateBody(event) {
        this.setState({
            body: event.target.value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.receiveTodo(this.state)
        this.setState({
            id: uniqueId(),
            title: '',
            body: '',
        })
    }



    render(){
        return(
            <form>
                <h2>ADD TODO</h2>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                </label>
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody} />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}


