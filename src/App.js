import React, { Component } from "react";
import { AddTodoForm } from "./components/AddTodoForm.js";
import { TodoList } from "./components/TodoList.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoItem(todoItem) {
    this.setState({
      todos: this.state.todos.concat(todoItem),
    });
    console.log(this.todos);
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm addTodoItem={this.addTodoItem} />
        <TodoList list={this.state.todos} />
      </div>
    );
  }
}
