import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';
import todosAPI from '../API/TodoResourseAPI'
import {deepCopy } from '../actions';

export default (state ={todoList:[],statusOfList: "active"} , action) => {
    switch (action.type) {

        case types.SHOW_FILTER_LIST:{
            //console.log(action.todos)
            //const todo = action.todos
            const newState=deepCopy(state)
            newState.todoList = action.todos
            return newState
        }

        case types.ADD_ITEM:{
            const newState = deepCopy(state)
            newState.todoList = action.todos
            return newState
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