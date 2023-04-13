
export const sortTodos = (todos) => {
    let uncompletedTodos = []
    let completedTodos = []
    todos.map(item=>{
        if(item.completed){
            completedTodos.push(item)
        }
        else{
            uncompletedTodos.push(item)
        }
    })
    // console.log(uncompletedTodos)
    return [...uncompletedTodos,...completedTodos]
}

export const checkIfTodoExist = (todos,content) => {
    let bool = false
    todos.map(item=>{
        if(item.title === content){
            bool=true
        }
    })
    return bool
}

