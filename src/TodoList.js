import React, { Component } from 'react'
import Todo from './Todo'
import NewForm from './NewForm'

 class TodoList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             todos:[
                 
             ]
         }
        }
   


    submit=(newTodos)=>{
        this.setState({
            todos:[...this.state.todos,newTodos]
        })
    }
    
    //remove an item from list
    remove=(id)=>{
        this.setState({
            todos:this.state.todos.filter(t=> t.id !== id)
        })
    }

   updateForm=(id,updateTodo)=>{
    const updated = this.state.todos.map(todo => {
        if(todo.id ===id){
            return {...todo, task:updateTodo}
        }else{
            return todo
        }
    })
    this.setState({
        todos:updated
    })
   }

   completedTodos=(id,updateTodo)=>{
    const updated = this.state.todos.map(todo => {
        if(todo.id ===id){
            return {...todo, completed: !todo.completed}
        }else{
            return todo
        }
    })
    this.setState({
        todos:updated
    })
   }
    render() {
        const todos = this.state.todos.map((todo) => {
          return (
            <li>
              <Todo 
              task={todo.task}
              key={todo.id}
              id={todo.id}
              remove={this.remove}
              updateForm={this.updateForm}
              completed={todo.completed}
              completedTodos={this.completedTodos}
               />
            </li>
          );
        });
        return (
            <div>
                <h1> Todo app</h1>
                    <NewForm submit={this.submit}/>
                <ul>{todos}</ul>
            </div>
        )
    }
}
 
export default TodoList