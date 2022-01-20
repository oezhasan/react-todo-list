import React, { Component } from "react";
import "../styles/TodoList.css";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  deleteTodo = (e) => {
    this.props.deleteTodoItem(e);
  };

  editTodo = (e) => {
    console.log(e);
    this.props.editTodoItem(e);
  };

  render() {
    return (
      <ul>
        {this.props.list.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.editable === "true" ? "edit" : ""}
            >
              <input type="checkbox" />
              <span contentEditable={todo.editable} id="todoSpan">
                {todo.text}
              </span>
              <div className="groupTodoBtn">
                <button
                  className="todoBtn"
                  onClick={() => {
                    this.deleteTodo(todo);
                  }}
                >
                  Delete
                </button>
                <button
                  className="todoBtn"
                  onClick={() => {
                    this.editTodo(todo);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
