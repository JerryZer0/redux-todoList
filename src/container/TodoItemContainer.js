import { connect } from 'react-redux';
import Iteam from '../components/TodoItem';
import App from '../App'
import todosAPI from '../API/TodoResourseAPI'
import { showFilterList } from '../actions';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        statusOfList: state.statusOfList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onFilterByStatus: statusOfList => {
        //     const todos = todoAPI.filerByStatus(statusOfList);
        //     dispatch(showFilterList(statusOfList, todos))
        // },
        onShowFilterList: statusOfList => {
            const todos = this.deepCopy(todosAPI.filerByStatus(statusOfList));
            dispatch(showFilterList(statusOfList,todos))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)