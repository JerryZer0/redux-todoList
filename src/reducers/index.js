import * as types from '../constants/ActionTypes'
import Todo from '../model/Todo';

export default (state ={editstatus: 'read'} , action) => {
    switch (action.type) {

        case "SHOW_FILTER_LIST":{
            const newState = [...state]
            newState[action.viewId]++
            return newState
        }

        case "CHANGE_ACTIVE":{
            const newState = [...state]
            newState.action.viewId = "read"
            return newState
        }

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