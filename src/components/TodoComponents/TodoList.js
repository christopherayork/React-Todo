import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  updateByID = (ID, update) => {
    let todos = this.state.todos;
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
    let cleared = this.state.todos.filter(todo => !todo.completed);
    this.setState({'todos': cleared});
  };

  render() {
    return (
        <div>
          {this.state.todos.map(todo => <Todo todo={todo} updateByID={this.updateByID} />)}
          <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        </div>
    );
  }

}
