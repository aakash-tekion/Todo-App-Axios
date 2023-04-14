import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Todo.css.js'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ThreeVerticalDots from '../../assets/three-dots-icon.svg'
import { Swipeable } from 'react-native-gesture-handler';
import { TodoFormContext } from '../../context/TodoFormContextProvider.js';


class TodoItem extends Component {
  static contextType = TodoFormContext
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false
    }
  }
  checkBoxHandler = (todoId,isChecked) => {
    this.context.updateTodos(todoId,isChecked)
    // updateTodos(this.props.username, todoId, this.props.updateTodo)
  }
  
  // optionsHandler = () => {
  //   this.setState({
  //     showOptions: true
  //   })
  // }
  
  

  render() {
    
    return (<View style={[styles.todoItem,styles.itemShadow]}>
      <BouncyCheckbox size={20} fillColor="coral" style={styles.checkBox}
        unfillColor="#FFFFFF" isChecked={this.props.todoData.completed} onPress={(isChecked) => this.checkBoxHandler(this.props.todoData.id,isChecked)} />
      <Text numberOfLines={2} style={this.props.todoData.completed ? [styles.todoText, styles.strikedText] : styles.todoText}>
        {this.props.todoData.title}
      </Text>
    </View> )
     
    

  }
}

export default TodoItem
