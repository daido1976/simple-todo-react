import React from 'react';
import { create } from '../api';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const todosUpdater = this.props.todosUpdater
    const title = this.state.title;
    const text = this.state.text;
    create(title, text).then(() =>
    {
      todosUpdater();
      this.setState({ title: '', text: ''});
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Todo Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>タイトル:</label>
            <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <label>テキスト:</label>
            <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
