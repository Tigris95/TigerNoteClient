import React,{Component} from 'react';
import ToDoListItem from './toDoListItem'
import axios from 'axios'

class ToDoList extends Component{
        state={
            todo:[]
        }
    componentDidMount(){
        axios.get('http://localhost:5000/')
       .then( res => {
          this.setState({todo:res.data}) 
       })
       .then(console.log('get all data'))  
    }
    render(){
        const removeTodo = (id) =>{this.setState({todo: this.state.todo.filter(item => item._id !== id)})}
        const todoItems = ()=> this.state.todo.map(todo =><ToDoListItem key={todo._id} todo={todo} remove={removeTodo}  />)
            return todoItems()
    }
}
export default ToDoList

