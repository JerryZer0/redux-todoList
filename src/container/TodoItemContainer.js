import { connect } from 'react-redux';
import Iteam from '../components/TodoItem';
import App from '../App'
import todoAPI from '../API/TodoResourseAPI'
import { showFilterList} from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        statusOfList: state.statusOfList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterByStatus: statusOfList => {
            const todos = todoAPI.filerByStatus(statusOfList);
            dispatch(showFilterList(statusOfList, todos))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)