import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import TodoList from './TodoList.js'
import AddButton from './AddButton.js'
import { styles } from '../../styles/Todo.css.js'
import TodoForm from './TodoForm.js'
import { TodoFormContext } from '../../context/TodoFormContextProvider.js'
import TodoTaskStatus from './TodoTaskStatus.js'

export default class TodoContainer extends Component {
    static contextType = TodoFormContext
    render() {
        return (
            
            <ImageBackground source={require('../../assets/app_bg.png')} style={styles.todoContainer}>
                {this.context.showTodoForm ? <TodoForm/> : <TodoTaskStatus/>} 
                <TodoList/>
                <AddButton/>
            </ImageBackground>
        )
    }
}

