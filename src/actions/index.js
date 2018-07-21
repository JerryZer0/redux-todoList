import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';
import todosAPI from '../API/TodoResourseAPI'

// export const increment = (index) => {
//     // console.log(index);
//     return { type: types.INCREMENT, index }
// }
// export const decrement = (index) => { return { type: types.DECREMENT, index } }
// export const multiplication = (index, num) => { return { type: types.MULTIPLICATION, index, num } }
export const add = (todos) => {
    return {type:types.ADD_ITEM,todos}
}

export const showFilterList = (todos) => { 
    return { type:types.SHOW_FILTER_LIST,todos } 
}
export const deepCopy = (array) => {
    return JSON.parse(JSON.stringify(array));
}
// export const toggleActive=(todos)=>{
//     return {type:"CHANGE_ACTIVE",todos}
// }
// export const changeToEditable=(todos)=>{
//     return{type:"ChANGE_TO_EDITABLE",todos}
// }

// export const updateItem=(todos)=>{
//     return{type:"UPDATE_ITEM",todos}
// }