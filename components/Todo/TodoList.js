import React, { Component } from 'react'
import { View,TouchableOpacity,Text} from 'react-native'
import TodoItem from './TodoItem'
import { styles } from '../../styles/Todo.css.js'
import { TodoFormContext } from '../../context/TodoFormContextProvider'
import { SwipeListView }  from "react-native-swipe-list-view"
import EditIcon from '../../assets/edit-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
class TodoList extends Component {
    static contextType = TodoFormContext

    componentDidMount() {
        this.context.getTodos()
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
    render() {
        let todos = this.context.todos

        return (
            <View style={styles.todoList}>
                {/* {todos.length > 0 ?
                     : ''} */}
                <SwipeListView data={todos}
                        renderItem={ ({item})  => {
                            
                            return <TodoItem todoData={item} />
                        }}
                        renderHiddenItem={ ({item})  => {
                                
                                return (<View style={styles.optionsBar}>
                                    {item.completed ? '' :
                                        <TouchableOpacity style={styles.optionsTag} onPress={() => { this.editHandler(item.id, item.title) }}>
                                            <EditIcon height={20} width={20} fill={'#000'} />
                                            
                                        </TouchableOpacity>
                                    }
                                    <TouchableOpacity style={styles.optionsTag} onPress={() => { this.deleteHandler(item.id) }}>
                                        <DeleteIcon height={18} width={20} fill={'#000'} />
                                    </TouchableOpacity>
                                    
                                </View>)
                        }}
                        rightOpenValue={-175}
                        

                        />
            </View>
        )
    }
}


export default TodoList

