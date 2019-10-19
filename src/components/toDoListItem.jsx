import React, { Component } from 'react';

class ToDoListItem extends Component {

    render() {
        const {todo} = this.props
        return (
            <div>
                {todo.map(todo => <li>{todo.title}</li>)}
            </div>
        );
    }
}

export default ToDoListItem;