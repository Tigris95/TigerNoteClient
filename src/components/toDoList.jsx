import React,{Component} from 'react';
import ToDoListItem from './toDoListItem'
import axios from 'axios'

console.log('test')

class ToDoList extends Component{
 
        state={
            todo: []
        }
  
   
    componentDidMount(){
        axios.get('http://localhost:5000/')
       .then( res => {
          // const todo = res.data;
          // this.state.todo = res.data //MUTATED!! 
          this.setState({todo:res.data}) 
          console.log(this.state.todo)
           
       })
       
    }
    render(){
        return(
           // <ToDoListItem item={this.state.todo}/>
          // <div>{this.state.todo.map(todo => <li>{todo.title}</li>)}</div>
          <ToDoListItem todo={this.state.todo}/>
        )
    }
}
export default ToDoList

