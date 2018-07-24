import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { index } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.todosUpdater = this.todosUpdater.bind(this);
  }

  componentDidMount() {
    this.todosUpdater();
  }

  todosUpdater() {
    index().then(response => this.setState({ todos: response }));
  }

  render() {
    return (
      <div className="app">
        <TodoForm todosUpdater={this.todosUpdater} />
        <TodoList todos={this.state.todos} todosUpdater={this.todosUpdater} />
      </div>
    );
  }
}

export default App;
