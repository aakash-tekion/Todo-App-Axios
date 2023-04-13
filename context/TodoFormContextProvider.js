import React from 'react'
import { sortTodos, checkIfTodoExist } from '../helper/todo.helper'
export const TodoFormContext = React.createContext()

import axios from 'axios'
import uuid from 'react-native-uuid'
let baseUrl = 'http://ec2-13-232-46-0.ap-south-1.compute.amazonaws.com:4001'
export class TodoFormContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      showTodoForm: false,
      addForm: true,
      inputValue: '',
      editId: ''
    }
  }
  getTodos = async () => {
    // console.log('call started')
    try {

      let response = await axios.get('http://ec2-13-232-46-0.ap-south-1.compute.amazonaws.com:4001/todos/')
      this.setState({
        todos: sortTodos(response.data)
      })
      // console.log('fetching end',response)
    }
    catch (error) {
      console.log(error)
    }

  }
  addTodo = async () => {
    let todo = {
      title: this.state.inputValue,
      id: uuid.v4(),
      completed: false
    }
    if (checkIfTodoExist(this.state.todos, this.input.value)) {
      try {
        await axios.post(`${baseUrl}/todos`, todo)
        this.setState(prevState => ({
          todos: [todo, ...prevState.todos]
        }))
      }
      catch (error) {
        console.log(error)
      }
    }


  }
  editTodos = async(id,newTitle) => {
    console.log(id,newTitle)
    console.log(checkIfTodoExist(this.state.todos,newTitle))
    try {
      let response = await axios.get(`${baseUrl}/todos/${id}`)
      todo = response.data
     
      if(!checkIfTodoExist(this.state.todos,newTitle)){
        todo.title = newTitle
        try {
          await axios.put(`${baseUrl}/todos/${id}`, todo)
          let updatedTodos = this.state.todos.map(item => {
            if(item.id === todo.id){
              item.title=newTitle
            }
            return item

          })
          
          this.setState({
              todos: updatedTodos
            })
          
        }
        catch (error) {
          console.log(error)
        }
      }
  
      
    }
    catch (error) {
      console.log(error)
    }

  }

  updateTodos = async (id, isChecked) => {
    console.log(id,isChecked)
    try {
      let response = await axios.get(`${baseUrl}/todos/${id}`)
      todo = response['data']
      todo.completed = !todo.completed
      try {
        await axios.put(`${baseUrl}/todos/${id}`, todo)
        console.log(this.state.todos)
        let updatedTodos = this.state.todos.filter(item => {
          return item.id !== todo.id
        })
        if (isChecked) {
          this.setState({
            todos: [...updatedTodos, todo]
          })
        }
        else {
          this.setState({
            todos: sortTodos([...updatedTodos, todo])
          })
        }
      }
      catch (error) {
        console.log(error)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  deleteTodos = async (id) => {
    try {
      await axios.delete(`${baseUrl}/todos/${id}`)
      let updatedTodos = this.state.todos.filter(item => {
        return item.id !== id
      })
      this.setState({
        todos: updatedTodos
      })
    }
    catch (error) {
      console.log(error)
    }


  }
  setTodoForm = () => {
    this.setState({
      showTodoForm: !this.state.showTodoForm
    })
  }
  setInputValue = (newValue) => {
    console.log(newValue)
    this.setState({
      inputValue: newValue
    })
  }
  resetInputValue = () => {
    this.setState({
      inputValue: ''
    })
  }
  resetEditId = () => {
    this.setState({
      editId: ''
    })
  }
  setEditId = (key) => {
    this.setState({
      editId: key
    })
  }
  setEditForm = () => {
    this.setState({
      addForm: false
    })
  }
  setAddForm = () => {
    this.setState({
      addForm: true
    })
  }

  render() {
    return (
      <TodoFormContext.Provider value={{
        todos: this.state.todos,
        getTodos: this.getTodos,
        addTodo: this.addTodo,
        updateTodos: this.updateTodos,
        deleteTodos: this.deleteTodos,
        editTodos:this.editTodos,
        showTodoForm: this.state.showTodoForm,
        addForm: this.state.addForm,
        inputValue: this.state.inputValue,
        setTodoForm: this.setTodoForm,
        setAddForm: this.setAddForm,
        setEditForm: this.setEditForm,
        setInputValue: this.setInputValue,
        resetInputValue: this.resetInputValue,
        setEditId: this.setEditId,
        editId: this.state.editId,
        resetEditId: this.resetEditId,

      }}>
        {this.props.children}
      </TodoFormContext.Provider>
    )
  }


}

