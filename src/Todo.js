import React, { Component } from 'react'
import './App.css'

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task:this.props.task
    };
  }

  handlechange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  updateform=(e)=>{
    e.preventDefault()
    this.props.updateForm(this.props.id,this.state.task)
    this.setState({
      isEditing: false
    })
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.updateform}>
            <input type="text"
              value={this.state.task}
              name='task'
              onChange={this.handlechange}            
             />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm} style={{ padding: 2, margin: 5 }}>
            edit
          </button>
          <button onClick={() => this.props.remove(this.props.id)}>
            {" "}
            delete
          </button>
          <p className=
          {this.props.completed ? 'completed':''}
          onClick={()=>this.props.completedTodos(this.props.id)}
          >{this.props.task}</p>
        </div>
      );
    }
    return result;
  }
}

export default Todo