import React,{Component} from 'react';
import ToDoListItem from './toDoListItem';
import AddTodo from './addTodo'

import{axiosGet} from './helpers/axios-helper'

class ToDoList extends Component{
        state={
            todo:[]
        }
    componentDidMount(){
    axiosGet(this)
    }
    render(){
        const removeTodo = (id) =>{this.setState({todo: this.state.todo.filter(item => item._id !== id)})}

        const addtodo = (todo) =>{
            const newTodo = this.state.todo.concat(todo)
            this.setState({todo: newTodo})
        }
        const todoItems = ()=> this.state.todo.map(todo =><ToDoListItem key={todo._id} todo={todo} remove={removeTodo}/>)
    
            return( 
                <div>
                    <AddTodo AddTodo={addtodo}></AddTodo>
                    {todoItems()}
                </div>     
                );
    }
}
export default ToDoList

