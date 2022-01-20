import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/AddTodoForm.css";

export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: {
        text: "",
        id: uniqid(),
        editable: "false",
      },
    };

    //not needed, if handleChange would be a arrow function
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputTodo: {
        text: e.target.value,
        id: this.state.inputTodo.id,
        editable: this.state.inputTodo.editable,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputTodo.text == "") return;

    this.props.addTodoItem(this.state.inputTodo);
    this.setState({
      inputTodo: {
        text: "",
        id: uniqid(),
        editable: "false",
      },
    });
  }

  render() {
    return (
      <form>
        <input
          value={this.state.inputTodo.text}
          placeholder="name"
          id="mainInput"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Task</button>
      </form>
    );
  }
}
