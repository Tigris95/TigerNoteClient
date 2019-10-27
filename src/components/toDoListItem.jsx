import React, { Component } from 'react';
import axios from 'axios'

class ToDoListItem extends Component {
   state={
       id: this.props.todo._id,
       title: this.props.todo.title,
       done: this.props.todo.done,
       date: this.props.todo.date
   }


   
    render() {
     const {done} = this.state.done
    
     const SetDone = () => this.setState({done: !this.state.done})

     const isDone = () => this.state.done ? 'tak' : 'nie'

     const deleteDone = () =>{axios.delete(`http://localhost:5000/deletetodo/${this.state.id}`).then(res => console.log(res))
     this.setState({done: true})
        }
        return (

            <div>
               <div>{this.state.title}</div>
               <div>{isDone()}</div> <input type="checkbox" checked={done} onClick={SetDone}/>
               <div>{this.state.date}</div>
               <button onClick={()=>{this.props.remove(this.state.id); deleteDone()}} >x</button>
               
               <hr/>
            </div>
        );
    }
}

export default ToDoListItem;