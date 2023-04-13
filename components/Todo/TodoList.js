import React, { Component } from 'react'
import { FlatList, View ,Image} from 'react-native'
import TodoItem from './TodoItem'
import { styles } from '../../styles/Todo.css.js'
import { TodoFormContext } from '../../context/TodoFormContextProvider'
import { SwipeListView } from '"react-native-swipe-list-view"'
class TodoList extends Component {
    static contextType = TodoFormContext
 
    componentDidMount(){
        this.context.getTodos()
    }

    render() {
        let todos = this.context.todos
        
        return ( 
            <View style={styles.todoList}>
                {todos.length>0?
                <SwipeListView data={todos} keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return <TodoItem  todoData={item}/>  
                }}
                />:''}

            </View>
        )
    }
}


export default TodoList

