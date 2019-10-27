import React, {Component} from 'react'


class AddTodo extends Component{
    render(){
        return(
            <div>
                <form action="">
                    <label htmlFor="title">Tytuł</label>
                    <input type="text" id="title" name='title'/>
                    <textarea name="text" id="text" cols="30" rows="10"></textarea>
                    <input type="submit" value="OK"/>
                </form>
            </div>
        )
    }
}

export default AddTodo