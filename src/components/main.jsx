import React, { Component } from 'react';
import Header from './header'
import ToDoList from './toDoList'

// to do api

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ToDoList/>
            </div>
        );
    }
}

export default Main;