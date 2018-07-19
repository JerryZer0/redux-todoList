import * as types from '../constants/ActionTypes'

export const increment = (index) => {
    // console.log(index);
    return { type: types.INCREMENT, index }
}
export const decrement = (index) => { return { type: types.DECREMENT, index } }
export const multiplication = (index, num) => { return { type: types.MULTIPLICATION, index, num } }
// export const delay = (index) => { return { type: types.DELAY, index } }