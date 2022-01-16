import React, { Component } from "react";
import { AddTodoForm } from "./components/AddTodoForm.js";
import { TodoList } from "./components/TodoList.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };

    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.editTodoItem = this.editTodoItem.bind(this);
  }

  addTodoItem(todoItem) {
    this.setState({
      todoList: this.state.todoList.concat(todoItem),
    });
  }

  deleteTodoItem(todoItem) {
    this.setState({
      todoList: this.state.todoList.filter((el) => el.id !== todoItem.id),
    });
  }

  editTodoItem(todoItem) {
    this.setState({
      todoList: this.state.todoList.map((el) =>
        el.id == todoItem.id ? (el.editable = "true") : el
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm addTodoItem={this.addTodoItem} />
        <TodoList
          editTodoItem={this.editTodoItem}
          deleteTodoItem={this.deleteTodoItem}
          list={this.state.todoList}
        />
      </div>
    );
  }
}
