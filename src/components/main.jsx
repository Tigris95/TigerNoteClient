import React, { Component } from 'react';
import Header from './header'
import ToDoList from './toDoList'
import AddTodo from './addTodo'
// to do api

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ToDoList/>
                <AddTodo/>
            </div>
        );
    }
}

export default Main;