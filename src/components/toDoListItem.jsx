import React, { Component } from 'react';
import moment from 'moment'
import 'moment/locale/pl'
import {redColor, redColorDark,greenColor,greenColorDark} from './helpers/colors--helper'
import {axiosDelete,axiosPatch} from './helpers/axios-helper'

class ToDoListItem extends Component {
   state={
       id: this.props.todo._id,
       title: this.props.todo.title,
       done: this.props.todo.done,
       text: this.props.todo.text,
       date: this.props.todo.date,
       hide: true
   }
    render() {
        const momentFullDate = moment(this.state.date).locale('pl').format('MMMM Do YYYY, h:mm:ss')
        const momentDayDate = moment(this.state.date).locale('pl').format('dddd')

        const SetDone = () => {
            this.setState({done: !this.state.done})
            axiosPatch(this)
        }

        const SetHide = () => {
            this.setState({hide: !this.state.hide})
        }
        const hideMark = () => this.state.hide ? 'x' : 'o'
            
        const isDone = () => this.state.done ? 'Ukończone' : 'Nie ukończone'
  
        const deleteTodo = () =>{
            this.props.remove(this.state.id);
            axiosDelete(this)
            }
        return (
            <div className="Item" style={this.state.done ? greenColor: redColor} >
                <div className="Item__button" 
                    style={this.state.done ? greenColorDark: redColorDark}
                    onClick={deleteTodo}>x</div>  
               <div className="Item__title">{this.state.title}</div>
               <div className="Item__date Item__date--main">{momentFullDate}</div>
               <div className="Item__date Item__date--day">{momentDayDate}</div>
               <div className="Item__done">
                   Status: {isDone()}
                   <input className="Item__input"
                          type="checkbox"
                          checked={this.state.done} 
                          onClick={SetDone} />
               </div> 
               <div className="Item__hideText"
                    onClick={SetHide} 
                    style={this.state.done ? greenColorDark: redColorDark}>{hideMark()} 
               </div>
               <div className="Item__text" 
                    style={this.state.hide ? {display: "none"} :{display: "inline"} }> 
                    {this.state.text}
               </div>
            </div>
        );
    }
}
export default ToDoListItem;