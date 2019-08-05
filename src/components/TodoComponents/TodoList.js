import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  font-family: Blinker,serif;
  
  .content {
    background: white;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
  }
`;



export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  updateByID = (ID, update) => {
    let todos = Array.from(this.state.todos);
    for(let t=0; t < todos.length; t++) {
      if(todos[t].id === ID) {
        todos[t] = update;
        this.setState({'todos': [...todos]});
        break;
      }
    }
  };

  addTodo = todo => this.setState({'todos': [...this.state.todos, todo]});

  clearCompleted = () => {
    let cleared = this.state.todos.filter(todo => {
      return !todo.completed;
    });
    this.setState({'todos': cleared});
  };

  render() {
    return (
        <TodoContainer>
          <div className='content'>
            {this.state.todos.map((todo) => <Todo key={todo.id} todo={todo} updateByID={this.updateByID} />)}
            <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
          </div>
        </TodoContainer>
    );
  }

}
