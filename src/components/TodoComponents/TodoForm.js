import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  
  * {
    margin: 0 2px;
  }
  
  input[type=text] {
    border-radius: 5px;
    border: 1px solid #bcbcbc;
  }
`;

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
    this.setState({'value': ''});
  };

  clear = event => {
    event.preventDefault();
    this.clearCompleted();
  };

  render() {
    return (
        <Form>
          <input type='text' name='todoName' placeholder='Todo Title' onChange={this.updateInput} value={this.state.value} />
          <button onClick={this.submitTodo}>Submit</button>
          <button onClick={this.clear}>Clear Completed</button>
        </Form>
    );
  }
}