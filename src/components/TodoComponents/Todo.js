import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.todo.task,
      id: props.todo.id,
      completed: false
    };
    this.updateByID = props.updateByID;
  }

  toggleCompleted = () => {
    let toggled = !this.state.completed;
    this.setState({'completed': toggled});
    let update = {...this.state};
    update.completed = toggled;
    this.updateByID(this.state.id, update);
  };

  render() {
    return (
        <div className='todo-title'>
          <input type='checkbox' onChange={this.toggleCompleted} />
          {this.state.completed ? <span><strike>{this.state.task}</strike></span> : <span>{this.state.task}</span>}
        </div>
    );
  }
}