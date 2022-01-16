import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  deleteTodo = (e) => {
    this.props.deleteTodoItem(e);
  };

  editTodo = (e) => {
    this.props.editTodoItem(e);
  };

  render() {
    return (
      <ul>
        {this.props.list.map((todo) => {
          return (
            <li key={todo.id}>
              <span contentEditable={todo.editable} id="todoSpan">
                {todo.text}
              </span>
              <button
                onClick={() => {
                  this.deleteTodo(todo);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  this.editTodo(todo);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
