import { connect } from 'react-redux';
import Iteam from '../components/TodoItem';
import App from '../App'
import todosAPI from '../API/TodoResourseAPI'
import { showFilterList, deepCopy, add } from '../actions';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        statusOfList: state.statusOfList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAdd: (todo, statusOfList) => {
            console.log(statusOfList)

            todosAPI.add(todo);
            //const todos = todoAPI.filerByStatus(statusOfList);
            const todos = deepCopy(
                todosAPI.filerByStatus(statusOfList)
            );
            dispatch(add(todos))
        },
        onShowFilterList: statusOfList => {
            //console.log(statusOfList)
            const todos = deepCopy(todosAPI.filerByStatus(statusOfList));
            //console.log(todos)
            dispatch(showFilterList(todos))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)