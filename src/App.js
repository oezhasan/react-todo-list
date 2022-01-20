import React, { Component } from "react";
import { AddTodoForm } from "./components/AddTodoForm.js";
import { TodoList } from "./components/TodoList.js";
import "./styles/App.css";

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
    let objIndex = this.state.todoList.findIndex(
      (todo) => todo.id == todoItem.id
    );
    let tempArr = this.state.todoList;
    tempArr[objIndex].editable === "false"
      ? (tempArr[objIndex].editable = "true")
      : (tempArr[objIndex].editable = "false");

    this.setState({
      todoList: tempArr,
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
