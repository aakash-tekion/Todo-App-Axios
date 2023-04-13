import React, { Component } from 'react'
import { StyleSheet, Text,TouchableOpacity,Image } from 'react-native'
import { styles } from '../../styles/Todo.css.js'
import { TodoFormContext } from '../../context/TodoFormContextProvider.js'
import AddFormIcon from '../../assets/add-form.svg'
import RemoveFormIcon from '../../assets/remove-form.svg'
import globalStyles from '../../styles/index.css.js'
export default class AddButton extends Component {
    static  contextType = TodoFormContext
    constructor(props){
        super(props)
    }
    todoFormToggler = () => {
      if(!this.context.addForm && this.context.showTodoForm){
        this.context.setAddForm()
      }
      this.context.resetInputValue()
      this.context.setTodoForm()
     
    }

  render() {
    let Icon = this.context.showTodoForm ? <RemoveFormIcon/>:<AddFormIcon/>
    return (
      <TouchableOpacity style={[styles.circularButton,globalStyles.cardShadow]} onPress={this.todoFormToggler}>
        {/* <Image style={styles.image} source={require('../../assets/plus.png')}/> */}
        {Icon}
      </TouchableOpacity>
    )
  }
}

