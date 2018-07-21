import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';
import todosAPI from '../API/TodoResourseAPI'

export default (state ={todoList:[{content:"434",status:"active",viewId:2}],statusOfList: "active"} , action) => {
    switch (action.type) {

        case "SHOW_FILTER_LIST":{
            const todo = action.todos
            todosAPI.add(todo)
            return todosAPI.todos
        }
        // case "CHANGE_ACTIVE":{
        //     const newTodo = action.todos
        //     newTodo.editstatus = "read"
        //     return newTodo
        // }

        // case "ChANGE_TO_EDITABLE":{
        //     const newTodo = action.todos
        //     newTodo.editstatus = "write"
        //     return newTodo
        // }

        // case "UPDATE_ITEM":{
        //     const newTodo = action.todos
        //     newTodo.editstatus = "read"
        //     return newTodo
        // }

        // case types.ASYNCHRONOUS:
        // {
        //     const newState = [...state]
        //     newState[action.index]++
        //     return newState
        // } 
        default:
            return state
    }
}