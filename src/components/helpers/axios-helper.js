import axios from 'axios'

export const axiosGet = param =>{
    axios.get('http://localhost:5000/')
    .then( res => {
       param.setState({todo:res.data.reverse()}) 
    })
    .then(console.log('get all data'))  
}

export const axiosPost = todo =>{
    axios.post('http://localhost:5000/addtodo', {todo})
}
export const axiosDelete = param =>{
    axios.delete(`http://localhost:5000/deletetodo/${param.state.id}`)
    .then(res => console.log(res))
}

export const axiosPatch = param =>{
    axios.patch(`http://localhost:5000/updatetododone/${param.state.id}`,{done: !param.state.done})
    .then(()=> console.log('updated'))
}