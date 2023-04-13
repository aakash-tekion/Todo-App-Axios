import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/Todo.css.js'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ThreeVerticalDots from '../../assets/three-dots-icon.svg'
import { Swipeable } from 'react-native-gesture-handler';
import { TodoFormContext } from '../../context/TodoFormContextProvider.js';
import CloseIcon from '../../assets/close.svg'
import EditIcon from '../../assets/edit-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
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
  editHandler = (key, value) => {
    this.context.setEditForm()
    this.context.setInputValue(value)
    if (!this.context.showTodoForm) {
      this.context.setTodoForm()
    }
    this.context.setEditId(key)
    this.setState({
      showOptions: false
    })
  }
  deleteHandler = (todoId) => {
    this.context.deleteTodos(todoId)
    this.setState({
      showOptions: false
    })
  }
  optionsHandler = () => {
    this.setState({
      showOptions: true
    })
  }
  swipeOptions = () => (<View><Text>Hello</Text></View>)
  

  render() {
    // return (
    //   <Swipeable renderLeftActions={this.swipeOptions}>
    //     <View style={[styles.todoItem, styles.itemShadow]}>
    //       <BouncyCheckbox size={20} fillColor="coral" style={styles.checkBox}
    //         unfillColor="#FFFFFF" isChecked={this.props.todoData.completed} onPress={() => this.checkBoxHandler(this.props.todoData.id)} />
    //       <Text numberOfLines={2} style={this.props.todoData.completed ? [styles.todoText, styles.strikedText] : styles.todoText}>
    //         {this.props.todoData.title}
    //       </Text>
    //       {/* <TouchableOpacity onPress={this.optionsHandler}>
    //         <ThreeVerticalDots height={18} width={100} fill={'#616060'} />
    //       </TouchableOpacity> */}
    //     </View>

    //   </Swipeable>
    // )
    let content = !this.state.showOptions ? <View style={[styles.todoItem,styles.itemShadow]}>
      <BouncyCheckbox size={20} fillColor="coral" style={styles.checkBox}
        unfillColor="#FFFFFF" isChecked={this.props.todoData.completed} onPress={(isChecked) => this.checkBoxHandler(this.props.todoData.id,isChecked)} />
      <Text numberOfLines={2} style={this.props.todoData.completed ? [styles.todoText, styles.strikedText] : styles.todoText}>
        {this.props.todoData.title}
      </Text>
      <TouchableOpacity onPress={this.optionsHandler}>
        <ThreeVerticalDots height={18} width={100} fill={'#616060'} />
      </TouchableOpacity> 
    </View> : <View style={[styles.todoItem, styles.optionsBar]}>
      {this.props.todoData.completed?'':
      <TouchableOpacity style={styles.optionsTag} onPress={() => { this.editHandler(this.props.todoData.id, this.props.todoData.title) }}>
        <EditIcon height={20} width={20} fill={'#fff'} />
        <Text style={styles.optionsText}>Edit</Text>
      </TouchableOpacity>
      }
      <TouchableOpacity style={styles.optionsTag} onPress={() => { this.deleteHandler(this.props.todoData.id) }}>
        <DeleteIcon height={18} width={20} fill={'#fff'} />
        <Text style={styles.optionsText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { this.setState({ showOptions: false }) }}>
        <CloseIcon fill={'#616060'} />
      </TouchableOpacity>
    </View>
    return content

  }
}

export default TodoItem
