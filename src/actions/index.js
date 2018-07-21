import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';
import todosAPI from '../API/TodoResourseAPI'

// export const increment = (index) => {
//     // console.log(index);
//     return { type: types.INCREMENT, index }
// }
// export const decrement = (index) => { return { type: types.DECREMENT, index } }
// export const multiplication = (index, num) => { return { type: types.MULTIPLICATION, index, num } }
// export const add = (event,value,statusOfList) => {
//     if (event !== undefined) {
//         if (event.keyCode === 13) {
//             todosAPI.add(new Todo(value));
//             const todos = deepCopy(
//                 todosAPI.filerByStatus(statusOfList)
//             );
//             return{ todos };
//         }
//     } else {
//         todosAPI.add(new Todo(value));
//         const todos = this.deepCopy(
//             this.todosAPI.filerByStatus(statusOfList)
//         );
//         return{ todos };
//     }
    
// }

export const showFilterList = (statusOfList,todos) => { 
    return { type:"SHOW_FILTER_LIST",statusOfList,todos } 
}
// export const deepCopy = (array) => {
//     return JSON.parse(JSON.stringify(array));
// }
// export const toggleActive=(todos)=>{
//     return {type:"CHANGE_ACTIVE",todos}
// }
// export const changeToEditable=(todos)=>{
//     return{type:"ChANGE_TO_EDITABLE",todos}
// }

// export const updateItem=(todos)=>{
//     return{type:"UPDATE_ITEM",todos}
// }