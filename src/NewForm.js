import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
 class NewForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              task:''
         }
     }
     
     handlechange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     onSubmit=(e)=>{
        e.preventDefault() 
        this.props.submit({...this.state, id:uuidv4(),completed:false})
        this.setState({
            task:''
        })
     }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor='task'> new todo </label>
                <input
                    type='text'
                    placeholder='new todo'
                    id='task'
                    name='task'
                    value={this.state.task}
                    onChange={this.handlechange}
                />

                <button style={{margin:2}}> add</button>
            </form>
        )
    }
}
export default NewForm