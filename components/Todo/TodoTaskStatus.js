import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/Todo.css'
import { connect } from 'react-redux'
import CompletedIcon from '../../assets/completed.svg'
import UnCompletedIcon from '../../assets/uncompleted.svg'
import globalStyles from '../../styles/index.css'
import { TodoFormContext } from '../../context/TodoFormContextProvider'
class TodoTaskStatus extends Component {
    static contextType = TodoFormContext
    countCompletedTasks = () => {
        let count = 0;
        this.context.todos.map(task => {
            if (task.completed) {
                count++;
            }
        })
        return count;
    }
    render() {
        return (
            <View style={[styles.todoStatusContainer,globalStyles.cardShadow]}>
                <Text style={styles.welcomeMessage}>Welcome Username</Text> 
                <View style={styles.todoStatus}>
                    <CompletedIcon />
                    <Text style={styles.todoStatusText}>
                        Completed Tasks - {this.countCompletedTasks()}
                    </Text>
                </View>
                <View style={styles.todoStatus}>
                    <UnCompletedIcon />
                    <Text style={styles.todoStatusText}>
                        Uncompleted Tasks - {this.context.todos.length - this.countCompletedTasks()}
                    </Text>

                </View>


            </View>
        )
    }
}



export default TodoTaskStatus