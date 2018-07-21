import React, { Component } from 'react';
//import Counters from './components/CounterGroup'
import './App.css';
import Todo from './model/Todo';
import TodoItem from './components/TodoItem';
import classNames from 'classnames';
import todosAPI from './API/TodoResourseAPI';
import Container from './container/ItemContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;

    this.state = {
      todos: [],
      statusOfList: Todo.ALL
    };
  }

  componentDidMount() {
    this.setState({
      todos: this.deepCopy(this.todosAPI.filerByStatus(Todo.ALL))
    });
  }

  add(event) {

    //console.log(event.button)
    if (event.keyCode === 13 || event.button === 0) {
      //console.log(event)
      this.todosAPI.add(new Todo(this.refs.newItem.value));
      const todos = this.deepCopy(
        this.todosAPI.filerByStatus(this.state.statusOfList)
      );
      this.setState({ todos });
      this.refs.newItem.value = '';
    }

  }

  toggleActive(viewId) {
    this.todosAPI.toggleActive(viewId);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.state.statusOfList)
    );
    this.setState({ todos });
  }

  showFilterList(event) {
    //console.log(this.state.todos);
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    // const todos = this.deepCopy(this.todosAPI.filerByStatus(statusOfList));
    // this.setState({ todos, statusOfList });
    this.props.onShowFilterList(statusOfList)

  }

  updateItemContent(viewId, content) {
    this.todosAPI.updateItemContent(viewId, content);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.state.statusOfList)
    );
    this.setState({ todos, statusOfList: this.state.statusOfList });
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {

    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div>
          <input
            className="input-text"
            onKeyUp={e => this.add(e)}
            id="todo-creator"
            ref="newItem"
          />
          <div className="button" onClick={e => this.add(e)}>
            Add
          </div>
        </div>
        <div>
          <ol>
            {(() => {
              const {todoList} = this.props
              console.log(todoList)
              return todoList.map(item => (
                <TodoItem
                  item={item}
                  key={item.viewId}
                  toggleActiveHandler={viewId => this.toggleActive(viewId)}
                  updateItemContent={(viewId, content) =>
                    this.updateItemContent(viewId, content)
                  }
                />
              ));
            })()}
          </ol>
        </div>
        <div>
          {/* <ul className="filters">
            <li>
              <a
                href="#all"
                onClick={e => this.showFilterList(e)}
                data-filter="all"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ALL
                })}
              >
                ALL
              </a>
            </li>
            <li>
              <a
                href="#active"
                onClick={e => this.showFilterList(e)}
                data-filter="active"
                className={classNames({
                  selected: this.state.statusOfList === Todo.ACTIVE
                })}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                onClick={e => this.showFilterList(e)}
                data-filter="completed"
                className={classNames({
                  selected: this.state.statusOfList === Todo.COMPLETED
                })}
              >
                Complete
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

export default App;
