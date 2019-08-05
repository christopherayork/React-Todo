import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.addTodo = props.addTodo;
    this.clearCompleted = props.clearCompleted;
  }

  updateInput = event => {
    this.setState({'value': event.target.value});
  };

  submitTodo = event => {
    event.preventDefault();
    let newTodo = {
      'task': this.state.value,
      'id': Date.now(),
      'completed': false
    };
    this.addTodo(newTodo);
  };

  clear = event => {
    event.preventDefault();
    this.clearCompleted();
  };

  render() {
    return (
        <form>
          <input type='text' name='todoName' placeholder='Todo Title' onChange={this.updateInput} value={this.state.value} />
          <button onClick={this.submitTodo}>Submit</button>
          <button onClick={this.clear}>Clear Completed</button>
        </form>
    );
  }
}