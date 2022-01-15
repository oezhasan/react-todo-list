import React, { Component } from "react";

export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
    };

    //not needed, if handleChange would be a arrow function
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputTodo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputTodo = this.state.inputTodo;
    this.props.addTodoItem(this.state.inputTodo);
    this.setState({
      inputTodo: "",
    });
  }

  render() {
    return (
      <form>
        <input
          value={this.state.inputTodo}
          placeholder="name"
          id="mainInput"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Task</button>
      </form>
    );
  }
}
