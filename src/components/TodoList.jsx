import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    const todosUpdater = this.props.todosUpdater;
    return (
      <div>
        <h3>Todo List</h3>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>テキスト</th>
              <th>作成日時</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {todos.map(todo => (
            <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            text={todo.text}
            created_at={todo.created_at}
            todosUpdater={todosUpdater}/>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
