import React, {Component} from 'react'
import uuid from 'uuid'
import {axiosPost} from './helpers/axios-helper'

class AddTodo extends Component{
    state={
        id: '',
        title: '',
        date: '',
        done: false,
        text:'',
        formState: false
    }

    render(){
        const onChangeTitle = e =>{
            this.setState({title: e.target.value})
        }
        const onChangeText = e =>{
            this.setState({text: e.target.value})
        }
     
        const onSubmit = e =>{
            e.preventDefault()
            const todo = {
                _id: uuid(),   
                title: this.state.title,
                date: Date.now(),
                done:this.state.done,
                text: this.state.text
            }
             axiosPost(todo)
            this.props.AddTodo(todo)
            
        }
        return(
            <div>
                <div className="Form__button" onClick={() =>this.setState({formState: !this.state.formState})}><p>+</p></div>
                <div className="Form__container">
                    <form className="Form" 
                            onSubmit={onSubmit} 
                            style={this.state.formState ? {display: 'flex'}:{display: 'none'}}>
                            
                        <label className="Form__label"htmlFor="title">Tytuł</label>
                        <input className="Form__title" type="text" id="title" name='title' onChange={onChangeTitle}/>

                        <label  className="Form__label"htmlFor="text">Text</label>
                        <textarea className="Form__text" name="text" id="text" cols="30" rows="10" onChange={onChangeText}></textarea>

                        <input className="Form__submit" type="submit" value="OK"/>
                    </form>
                </div>     
            </div>
        )
    }
}

export default AddTodo